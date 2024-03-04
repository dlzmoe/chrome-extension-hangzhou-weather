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
import './main.css'
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
    async getList() {
      const data = JSON.parse(localStorage.getItem("data"));

      if (data) {
        this.data = data;
      } else {
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
      }
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

