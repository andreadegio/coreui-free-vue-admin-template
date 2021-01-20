<template>
  <div>
    <CModal
      title="COMUNICAZIONE IMPORTANTE: RINNOVI ADRIATIC C1152 (EX C1096)"
      color="info"
      :show.sync="newsModal"
    >
      Siamo a segnalare che i rinnovi inseriti e disponibili in piattaforma con
      ADRIATIC C1152 (ex Adriatic C1096) hanno la copertura RC Auto e rivalse.
      L’assistenza stradale o eventuali altre garanzie non sono comprese.
    </CModal>
    <div data-aos="flip-up">
      <h1 class="display-3">
        Benvenuti in <span style="color: #01295c">Aby</span
        ><span style="color: #eb2226">Way</span>
      </h1>
      <p class="lead">La nuova piattaforma operativa</p>
    </div>
    <CRow>
      <CCol md="4">
        <CCard data-aos="fade-right">
          <CCardHeader>
            <CIcon name="cil-justify-center" /><strong
              >Ultime News Operative
            </strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem class="flex-column align-items-start">
                <CBadge color="primary">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    COMUNICAZIONE IMPORTANTE: RINNOVI ADRIATIC C1152 (EX C1096)
                  </h5>
                  <small>14/01/2021</small>
                </div>
                <p class="mb-1">
                  {{ provanews | truncate(100, "...") }}
                </p>
                <CButton
                  @click="newsModal = true"
                  color="primary"
                  size="sm"
                  variant="ghost"
                >
                  Leggi
                </CButton>
              </CListGroupItem>
              <CListGroupItem class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </CListGroupItem>
              <CListGroupItem href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">4 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </CListGroupItem>
              <CListGroupItem href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">10 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
          <CCardFooter>
            <div class="card-header-actions">
              <CLink
                href="http://broker.abybroker.it/ea2019/RicercaNotizieUO.aspx"
                target="_blank"
                class="card-header-action btn-setting"
              >
                <CIcon name="cil-list" /><strong> Elenco completo...</strong>
              </CLink>
            </div>
          </CCardFooter>
        </CCard>
      </CCol>

      <CCol md="8">
        <CCard data-aos="fade-left">
          <CCardHeader
            ><CIcon name="cil-justify-center" />
            <strong>News dal mondo</strong>
          </CCardHeader>
          <CCardBody>
            <div>
  <b-card-group columns>
    <b-card
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card>
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

    <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>
</div>

            <div class="container mb-2">
              <div class="row d-flex">
                <div class="col-md-8">
                  <div class="d-flex flex-row"></div>
                  <div class="row news-card p-3 bg-white">
                    <div class="col-md-4">
                      <div class="feed-image">
                        <img
                          class="news-feed-image rounded img-fluid img-responsive"
                          src="https://i.imgur.com/ZKbpmaU.jpg"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="news-feed-text">
                        <h5>
                          Infortuni: nel 2019 le polizze individuali pari al 75%
                          del ramo
                        </h5>
                        <span
                          >Secondo la statistica pubblicata dall’ANIA, nel 2019
                          la percentuale dei premi contabilizzati relativi a
                          polizze individuali infortuni è stata pari al 75% del
                          totale del ramo, tre punti percentuali in più rispetto
                          al 2018; un quarto dei premi contabilizzati è,
                          conseguentemente, afferente alle polizze collettive.
                          Anche relativamente ai premi di nuova produzione si
                          registra un aumento dell’incidenza delle polizze
                          individuali, che passa dal 75% nel 2018 all’80% nel
                          2019.<br
                        /></span>
                        <div
                          class="d-flex flex-row justify-content-between align-items-center mt-2"
                        >
                          <div class="d-flex flex-column ml-2">
                            <span class="date">Jan 20,2020</span>
                          </div>
                          <i class="fa fa-share share"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <!-- <WidgetsDropdown /> -->
    <!-- <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Traffic</h4>
            <div class="small text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              <CIcon name="cil-cloud-download" />
            </CButton>
            <CButtonGroup class="float-right mr-3">
              <CButton
                color="outline-secondary"
                v-for="(value, key) in ['Day', 'Month', 'Year']"
                :key="key"
                class="mx-0"
                :pressed="value === selected ? true : false"
                @click="selected = value"
              >
                {{ value }}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChartExample style="height: 300px; margin-top: 40px" />
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="40"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="info"
              :value="20"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="warning"
              :value="60"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="danger"
              :value="80"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <CProgress class="progress-xs mt-2" :precision="1" :value="40" />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard> -->

    <!-- <WidgetsBrand /> -->
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader> Traffic &amp; Sales </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">New Clients</small><br />
                      <strong class="h4">9,123</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Recurring Clients</small><br />
                      <strong class="h4">22,643</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Monday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" color="info" :value="34" />
                    <CProgress class="progress-xs" color="danger" :value="78" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Tuesday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="56" color="info" />
                    <CProgress class="progress-xs" :value="94" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Wednesday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="12" color="info" />
                    <CProgress class="progress-xs" :value="67" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Thursday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="43" color="info" />
                    <CProgress class="progress-xs" :value="91" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Friday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="22" color="info" />
                    <CProgress class="progress-xs" :value="73" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Saturday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="53" color="info" />
                    <CProgress class="progress-xs" :value="82" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Sunday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress class="progress-xs" :value="9" color="info" />
                    <CProgress class="progress-xs" :value="69" color="danger" />
                  </div>
                </div>
                <div class="legend text-center">
                  <small>
                    <sup><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                    New clients &nbsp;&nbsp;
                    <sup
                      ><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup
                    >
                    Recurring clients
                  </small>
                </div>
              </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">Pageviews</small><br />
                      <strong class="h4">78,623</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Organic</small><br />
                      <strong class="h4">49,123</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-user" class="progress-group-icon" />
                      <span class="title">Male</span>
                      <span class="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="43"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div class="progress-group mb-5">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-user-female"
                        class="progress-group-icon"
                      />
                      <span class="title">Female</span>
                      <span class="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="37"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon" />
                      <span class="title">Organic Search</span>
                      <span class="ml-auto font-weight-bold">
                        191,235 <span class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Facebook</span>
                      <span class="ml-auto font-weight-bold">
                        51,223 <span class="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="15"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Twitter</span>
                      <span class="ml-auto font-weight-bold">
                        37,564 <span class="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="11"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">LinkedIn</span>
                      <span class="ml-auto font-weight-bold">
                        27,319 <span class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="divider text-center">
                    <CButton color="link" size="sm" class="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div>
                </ul>
              </CCol>
            </CRow>
            <br />
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{ item }">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="" />
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="user" slot-scope="{ item }">
                <div>{{ item.user.name }}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span>
                  | Registered: {{ item.user.registered }}
                </div>
              </td>
              <td slot="country" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.country.flag" height="25" />
              </td>
              <td slot="usage" slot-scope="{ item }">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.usage.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.usage.period }}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>
              <td slot="payment" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.payment.icon" height="25" />
              </td>
              <td slot="activity" slot-scope="{ item }">
                <div class="small text-muted">Last login</div>
                <strong>{{ item.activity }}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
// import MainChartExample from "./charts/MainChartExample";
// import WidgetsDropdown from "./widgets/WidgetsDropdown";
// import WidgetsBrand from "./widgets/WidgetsBrand";

export default {
  name: "Dashboard",
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    // WidgetsBrand,
  },
  data() {
    return {
      provanews:
        "Siamo a segnalare che i rinnovi inseriti e disponibili in piattaforma con ADRIATIC C1152 (ex Adriatic C1096) hanno la copertura RC Auto e rivalse. L’assistenza stradale o eventuali altre garanzie non sono comprese. ",
      newsModal: false,
      selected: "Month",
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "USA", flag: "cif-us" },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago",
        },
        {
          avatar: { url: "img/avatars/2.jpg", status: "danger" },
          user: {
            name: "Avram Tarasios",
            new: false,
            registered: "Jan 1, 2015",
          },
          country: { name: "Brazil", flag: "cif-br" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Visa", icon: "cib-cc-visa" },
          activity: "5 minutes ago",
        },
        {
          avatar: { url: "img/avatars/3.jpg", status: "warning" },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2015" },
          country: { name: "India", flag: "cif-in" },
          usage: { value: 74, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Stripe", icon: "cib-stripe" },
          activity: "1 hour ago",
        },
        {
          avatar: { url: "img/avatars/4.jpg", status: "" },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2015" },
          country: { name: "France", flag: "cif-fr" },
          usage: { value: 98, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "PayPal", icon: "cib-paypal" },
          activity: "Last month",
        },
        {
          avatar: { url: "img/avatars/5.jpg", status: "success" },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Spain", flag: "cif-es" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Google Wallet", icon: "cib-google-pay" },
          activity: "Last week",
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2015",
          },
          country: { name: "Poland", flag: "cif-pl" },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Amex", icon: "cib-cc-amex" },
          activity: "Last week",
        },
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user" },
        { key: "country", _classes: "text-center" },
        { key: "usage" },
        { key: "payment", label: "Payment method", _classes: "text-center" },
        { key: "activity" },
      ],
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
};
</script>
