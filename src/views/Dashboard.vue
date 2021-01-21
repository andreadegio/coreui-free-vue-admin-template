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
                <CBadge color="primary">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">RINNOVI BENE ASSICURAZIONI C757</h5>
                  <small class="text-muted">11/01/2021</small>
                </div>
                <p class="mb-1">
                  Siamo a raccomandarci di mantenere quanto più possibile i
                  rinnovi Rc auto in scadenza con la compagnia BENE
                  ASSICURAZIONI C757. Gli importi di rinnovo per gennaio 2021
                  sono disponibili in piattaforma e diminuiti rispetto al 2020.
                  La convenzione è fondamentale per Aby Broker e
                  conseguentemente per tutti i collaboratori, ma per mantenerla
                  in vita necessitiamo di rinnovare quanti più titoli possibili.
                  Confidiamo nella vostra collaborazione.
                </p>
              </CListGroupItem>
              <CListGroupItem href="#" class="flex-column align-items-start">
                <CBadge color="warning">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    FINE PROROGA 30 GIORNI SUI CONTRATTI RC AUTO
                  </h5>
                  <small class="text-muted">29/07/2020</small>
                </div>
                <p class="mb-1">
                  Dal 01° agosto 2020 non ci sarà più la proroga dei 30 giorni
                  per le scadenze rc auto e ritornerà in vigore la normale
                  proroga di 15 giorni.
                </p>
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
        <CCard data-aos="fade-left" md="8">
          <CCardHeader
            ><CIcon name="cil-justify-center" />
            <strong>News dal mondo</strong>
          </CCardHeader>
          <CCardBody md="8">
            <!-- <CMedia aside-vertical-position="center" >
              <h5 class="mt-0">Media Title</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </p>
            </CMedia> -->
            <div class="row">
              <div class="col">
                <!-- <CMedia aside-vertical-position="center" >
              <h5 class="mt-0">Media Title</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </p>
            </CMedia> -->
                <v-card>
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="orange" text> Leggi </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div class="col">
                <v-card>
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="orange" text> Leggi </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div class="col">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="orange" text> Share </v-btn>

                    <v-btn color="orange" text> Explore </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow align-horizontal="center" class="pt-5">
      <CCol sm="4" md="4">
        <CCardLink href="http://broker.abybroker.it/ea2019/" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/assicurazioni.png');
              background-position: center;
              background-size: contain;
            "
            data-aos="fade-down-right"
          >
            <h1 style="color: #3c4b64">ASSICURAZIONI</h1>
          </CCard>
        </CCardLink>
      </CCol>

      <CCol sm="4" md="4">
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/energy.png');
              background-position: center;
              background-size: contain;
            "
            data-aos="fade-down-left"
          >
            <h1 style="color: #3c4b64">ENERGY</h1>
          </CCard>
        </CCardLink>
      </CCol>
    </CRow>

    <CRow align-horizontal="center" class="pt-5">
      <CCol sm="3" md="3">
        <CCardLink
          href="http://broker.abybroker.it/ea2019/Stats_FlashReports.aspx"
          target="_self"
        >
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/statistiche.png');
              background-position: center bottom;
              background-size: auto;
              background-position-y: 80px;
            "
            data-aos="flip-left"
          >
            <CCardTitle style="color: #3c4b64">
              <h1>STATISTICHE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
      <CCol sm="3" md="3">
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/marketing.png');
              background-position: center bottom;
              background-size: auto;
              background-position-y: 80px;
            "
            data-aos="flip-up"
          >
            <CCardTitle style="color: #3c4b64">
              <h1>MARKETING</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
      <CCol sm="3" md="3">
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/amministrazione.png');
              background-position: center bottom;
              background-size: auto;
              background-position-y: 80px;
            "
            data-aos="flip-right"
          >
            <CCardTitle style="color: #3c4b64">
              <h1>AMMINISTRAZIONE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
    </CRow>
    <CRow align-horizontal="center" class="pt-5">
      <CCol sm="3" md="3">
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/formazione.png');
              background-position: center bottom;
              background-size: auto;
              background-position-y: 80px;
            "
            data-aos="flip-left"
          >
            <CCardTitle style="color: #3c4b64">
              <h1>FORMAZIONE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
      <CCol sm="3" md="3">
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6"
            body-wrapper
            style="
              height: 200px;
              background-image: url('img/buttons/documentale.png');
              background-position: center bottom;
              background-size: auto;
              background-position-y: 80px;
            "
            data-aos="flip-up"
          >
            <CCardTitle style="color: #3c4b64">
              <h1>DOCUMENTALE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
      <CCol sm="3" md="3"> </CCol>
    </CRow>
  </div>
</template>

<script>


export default {
  name: "Dashboard",
  components: {

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
<style scoped>
.elevation-6 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.elevation-6:hover {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  border-color: midnightblue;
}
</style>