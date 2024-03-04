<template>
  <div class="main">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>日期</th>
            <th>温度</th>
            <th>天气</th>
            <th>风向</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.fxDate }}</td>
            <td>{{ item.tempMin }}° - {{ item.tempMax }}°</td>
            <td>{{ item.textDay }} - {{ item.textNight }}</td>
            <td>{{ item.windDirDay }} - {{ item.windDirNight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "./main.css";
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      location: "101210101",
      key: "81efeb945bd74d6da791f706263e8559",
    };
  },
  methods: {
    saveTimestamp() {
      var timestamp = Date.now();
      localStorage.setItem("timestamp", timestamp);
    },
    checkTimestamp() {
      var storedTimestamp = localStorage.getItem("timestamp");
      if (storedTimestamp) {
        var currentTime = Date.now();
        var elapsedTime = currentTime - storedTimestamp;
        var oneHour = 60 * 60 * 1000; // 1小时的毫秒数

        if (elapsedTime >= oneHour) {
          // 执行事件
          console.log("超过1小时");
          this.getList();
        } else {
          this.data = localStorage.getItem("data");

          this.data = JSON.parse(this.data);
          console.log(this.data);
        }
      } else {
        // 如果localStorage中没有时间戳，则保存当前时间戳
        this.saveTimestamp();
        this.getList();
      }
    },
    async getList() {
      axios
        .get(
          "https://devapi.qweather.com/v7/weather/7d?location=" +
            this.location +
            "&key=" +
            this.key
        )
        .then((response) => {
          localStorage.setItem("data", JSON.stringify(response.data.daily));
          this.data = response.data.daily;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.checkTimestamp();
  },
  mounted() {
    // this.getList();
  },
};
</script>
