<template>
      <v-row>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Sprint Progression</v-card-title>
            <v-card-text>
              <GChart
                type="LineChart"
                :data="burndown.chartData"
                :options="burndown.chartOptions"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Deliverabillity</v-card-title>
            <v-card-text>
              <GChart
                type="LineChart"
                :data="deliverability.chartData"
                :options="deliverability.chartOptions"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Rejection</v-card-title>
            <v-card-text>
              <GChart
                type="LineChart"
                :data="rejection.chartData"
                :options="rejection.chartOptions"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Task Lifecycle</v-card-title>
            <v-card-text>
              <GChart
                style="height: 500px;"
                type="PieChart"
                :data="taskLifecycle.chartData"
                :options="taskLifecycle.chartOptions"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12 xs=12>
          <v-card flat class="px-3 mb-5">
            <v-card-title>Estimation Chart</v-card-title>
            <v-card-text>
              <!-- <GChart
                type="Timeline"
                :data="estimation.chartData"
                :options="estimation.chartOptions"
              /> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  created() {
    //eslint-disable-next-line
    // console.log(this.$route.params.projectId)
  },
  components:{
    GChart
  },
  data() {
    return {
      burndown: {
        chartData: [
          ['Day', 'Points Remaining', 'Ideal Burndown'],
          ['Monday', 15, 15],
          ['Tuesday', 13, 11.25],
          ['Wednesday', 11, 7.5],
          ['Thursday', 6, 3.75],
          ['Friday', 3, 0],
          ['Saturday', 3, 0],
          ['Sunday', 3, 0],
        ],
        chartOptions: {
          title: 'Burndown Chart',
          subtitle: 'Points Remaining, Iteration : 2',
        }
      },
      deliverability:{
        chartData: [
          ['Iteration', 'Deliver Rate'],
          ['Iteration 1', 92],
          ['Iteration 2', 88],
          ['Iteration 3', 91],
          ['Iteration 4', 96],
          ['Current Iteration', 90]
        ],
        chartOptions: {
          title: 'Burndown Chart',
        }
      },
      rejection:{
        chartData: [
          ['Iteration', 'Rejection Rate'],
          ['Iteration 1', 12],
          ['Iteration 2', 8],
          ['Iteration 3', 18],
          ['Iteration 4', 14],
          ['Current Iteration', 9]
        ],
        chartOptions: {
          title: 'Rejection Rate',
          colors: ['red'],
          vAxis : {
            maxValue : 100
          }
        }
      },
      taskLifecycle:{
        chartData: [
          ['State', 'Avg. Hours'],
          ['Planned', 2],
          ['Started', 6],
          ['Finished', 0.5],
          ['Accepted', 1],
          ['Rejected', 1]
        ],
        chartOptions: {
          title: 'Task Lifecycle',
          pieHole: 0.4,
          colors: ['#dbdbdb','#f08000','#203e64','#629200','#a71f39']
        }
      },
      estimation: {
        chartData: [
          ['Day', 'Points Remaining', 'Ideal Burndown'],
          ['Monday', 15, 15],
          ['Tuesday', 13, 11.25],
          ['Wednesday', 11, 7.5],
          ['Thursday', 6, 3.75],
          ['Friday', 3, 0],
          ['Saturday', 3, 0],
          ['Sunday', 3, 0],
        ],
        chartOptions: {
          title: 'Burndown Chart',
          subtitle: 'Points Remaining, Iteration : 2',
        }
      },
    }
  },
}
</script>