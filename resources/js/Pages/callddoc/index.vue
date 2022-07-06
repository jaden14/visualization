<template>
    <Head>
        <title>CalldDoc</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h1>CalldDoc Visualization</h1>
        </div>
    </div>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-6"></div>
        <div class="masonry-item w-100">
            <div class="row gap-20">
                <!-- #Toatl Visits ==================== -->
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">CASES</h6>
                        </div>
                        <div class="layer w-100" v-for="totals in cases_total">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">{{ totals.hospitalname }}</span>
                                </div>
                                <div class="peer">
                                    <span
                                        class="
                                            d-ib
                                            lh-0
                                            va-m
                                            fw-300
                                            bdrs-2em
                                            pX-15
                                            pY-15
                                            bgc-green-40
                                            c-green-500
                                        "
                                        ><b>{{ Number(totals.total_count).toLocaleString() }}
                                        </b></span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">CLIENTS</h6>
                        </div>
                        <div class="layer w-100" v-for="totals in client_total">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">{{ totals.hospitalname }}</span>
                                </div>
                                <div class="peer">
                                    <span
                                        class="
                                            d-ib
                                            lh-0
                                            va-m
                                            fw-300
                                            bdrs-2em
                                            pX-15
                                            pY-15
                                            bgc-red-40
                                            c-red-500
                                        "
                                        ><b>{{ Number(totals.total_client).toLocaleString() }}
                                        </b></span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">FIRST TIME CLIENTS</h6>
                        </div>
                        <div class="layer w-100" v-for="totals in total_first">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">{{ totals.hospitalname }}</span>
                                </div>
                                <div class="peer">
                                    <span
                                        class="
                                            d-ib
                                            lh-0
                                            va-m
                                            fw-300
                                            bdrs-2em
                                            pX-15
                                            pY-15
                                            bgc-blue-40
                                            c-blue-500
                                        "
                                        ><b>{{ Number(totals.total_first).toLocaleString() }}
                                        </b></span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">REPEAT CLIENTS</h6>
                        </div>
                        <div class="layer w-100" v-for="totals in total_repeat">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">{{ totals.hospitalname }}</span>
                                </div>
                                <div class="peer">
                                    <span
                                        class="
                                            d-ib
                                            lh-0
                                            va-m
                                            fw-300
                                            bdrs-2em
                                            pX-15
                                            pY-15
                                            bgc-deep-purple-40
                                            c-deep-purple-500
                                        "
                                        ><b>{{ Number(totals.repeat_time).toLocaleString() }}
                                        </b></span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #Total Page Views ==================== -->
                <!-- #Unique Visitors ==================== -->
                <!-- #Bounce Rate ==================== -->
            </div>
        </div>
        <div class="masonry-item col-12">
            <!-- #Site Visits ==================== -->
            <div class="bd bgc-white">
                <div class="peers fxw-nw@lg+ ai-s">
                    <div class="peer peer-greed w-60p@lg+ w-100@lg- p-20">
                        <div class="layers">
                            <div class="layer w-100 mB-10">
                                <h6 class="lh-1">CASES TREND</h6>
                            </div>
                            <div class="layer w-100">
                                <BarChart :casetrend="casetrend" />
                            </div>
                        </div>
                    </div>
                    <div class="peer bdL p-20 w-40p@lg+ w-100p@lg-">
                        <div class="layers">
                            <div class="layer w-100">
                                <div class="layers" v-for="averages in average">
                                    <div class="layer w-100">
                                        <h5 class="mB-5">{{ averages.hospitalname }}</h5>
                                        <small class="fw-600 c-grey-700"
                                            >RATING</small
                                        >
                                        <span
                                            class="pull-right c-grey-600 fsz-sm"
                                            >{{ Number(averages.rating).toFixed(2) }}</span
                                        >
                                        <div class="progress mT-10">
                                            <div
                                                class="
                                                    progress-bar
                                                    bgc-blue-500
                                                "
                                                role="progressbar"
                                                aria-valuenow="1"
                                                aria-valuemin="0"
                                                aria-valuemax="10"
                                                :style="{width: averages.rating*10 + '%'}"
                                            >
                                                <span class="visually-hidden"
                                                    >{{ Number(averages.rating).toFixed(2) }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-6">
            <!-- #SERVED CASES BY HOSPITAL ==================== -->
            <div class="bd bgc-white">
                <div class="peers fxw-nw@lg+ ai-s">
                    <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                        <div class="layers">
                            <div class="layer w-100 mB-10">
                                <h6 class="lh-1">SERVED CASES BY HOSPITALS</h6>
                            </div>
                            <div class="layer w-100">
                                  <PieChart :served="served" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="masonry-item col-6">
            <!-- #ERVED CASES BY PROVINCE ==================== -->
            <div class="bd bgc-white">
                <div class="peers fxw-nw@lg+ ai-s">
                    <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                        <div class="layers">
                            <div class="layer w-100 mB-10">
                                <h6 class="lh-1">SERVED CASES BY PROVINCE</h6>
                            </div>
                            <div class="layer w-100">
                                   <PieChart :served="served_per_province" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="masonry-item col-6">
            <!-- #FIRST AND REPEAT CLIENT ==================== -->
            <div class="bd bgc-white">
                <div class="peers fxw-nw@lg+ ai-s">
                    <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                        <div class="layers">
                            <div class="layer w-100 mB-10">
                                <h6 class="lh-1">CLIENT CONSULTATION FREQUENCY</h6>
                            </div>
                            <div class="layer w-100">
                                   <PieChart :served="first_repeat_client" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="masonry-item col-6">
            <!-- #DEPARTMENT ==================== -->
            <div class="bd bgc-white">
                <div class="peers fxw-nw@lg+ ai-s">
                    <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                        <div class="layers">
                            <div class="layer w-100 mB-10">
                                <h6 class="lh-1">CONSULTATION DEPARTMENT</h6>
                            </div>
                            <div class="layer w-100">
                                   <PieChart :served="department" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import BarChart from './../charts/BarChart'
import PieChart from './../charts/PieChar.vue'

export default {
  name: 'App',
  components: { BarChart, PieChart },
   props: {
        casetrend: Object,
        cases_total: Array,
        client_total: Array,
        average: Array,
        total_first: Array,
        total_repeat: Array,
        served: Object,
        served_per_province: Object,
        first_repeat_client: Array,
        department: Array,
    },
}
</script>