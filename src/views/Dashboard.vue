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
    <CRow>
      <CCol md="1"> </CCol>
      <CCol md="10">
        <div
          data-aos="flip-up"
          style="text-align: center; padding-bottom: 15px"
        >
          <h1 class="display-3">
            Benvenuti in <span style="color: #01295c">Aby</span
            ><span style="color: #eb2226">Way</span>
          </h1>
          <div id="scritta"><hr /></div>
        </div>
      </CCol>
      <CCol md="1"> </CCol>
    </CRow>
    <CRow>
      <CCol md="1"> </CCol>
      <CCol align-horizontal="center" md="2" class="h-100">
        <CCardLink
          href="http://broker.abybroker.it/ea2019/Stats_FlashReports.aspx"
          target="_self"
        >
          <CCard
            class="text-center elevation-6 pulsanti-azioni"
            body-wrapper
            style="background-image: url('img/buttons/statistiche.png')"
            data-aos="flip-left"
          >
            <CCardTitle>
              <h1>STATISTICHE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6 pulsanti-azioni"
            style="background-image: url('img/buttons/marketing.png')"
            data-aos="flip-up"
          >
            <CCardTitle>
              <h1>AREA COMMERCIALE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6 pulsanti-azioni"
            style="background-image: url('img/buttons/amministrazione.png')"
            data-aos="flip-right"
          >
            <CCardTitle>
              <h1 style="font-size: 1.4vw; line-height: 3em">
                AMMINISTRAZIONE
              </h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6 pulsanti-azioni"
            body-wrapper
            style="background-image: url('img/buttons/formazione.png')"
            data-aos="flip-left"
          >
            <CCardTitle>
              <h1>FORMAZIONE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
        <CCardLink href="#" target="_self">
          <CCard
            class="text-center elevation-6 pulsanti-azioni"
            body-wrapper
            style="background-image: url('img/buttons/documentale.png')"
            data-aos="flip-up"
          >
            <CCardTitle>
              <h1>DOCUMENTALE</h1>
            </CCardTitle>
          </CCard>
        </CCardLink>
      </CCol>
      <CCol md="4">
        <CCard data-aos="fade-right" class="h-100">
          <CCardHeader class="d-flex justify-content-between">
            <strong>ULTIME NEWS OPERATIVE </strong>
            <div class="card-header-actions">
              <CLink
                href="http://broker.abybroker.it/ea2019/RicercaNotizieUO.aspx"
                target="_blank"
                class="card-header-action btn-setting"
              >
                <strong>
                  <CIcon name="cil-justify-center" /> Elenco completo...</strong
                >
              </CLink>
            </div>
          </CCardHeader>
          <CCardBody id="news-list">
            <CListGroup>
              <CListGroupItem class="flex-column align-items-start">
                <p style="text-align: right; margin-bottom: 0">
                  <small class="text-muted">11/01/2021</small>
                </p>
                <CBadge color="primary">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    COMUNICAZIONE IMPORTANTE: RINNOVI ADRIATIC C1152 (EX C1096)
                  </h5>
                </div>
                <p class="mb-1">
                  {{ provanews | truncate(150, "...") }}
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
                <p style="text-align: right; margin-bottom: 0">
                  <small class="text-muted">11/01/2021</small>
                </p>
                <CBadge color="primary">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">RINNOVI BENE ASSICURAZIONI C757</h5>
                </div>
                <p class="mb-1">
                  {{ news2 | truncate(150, "...") }}
                </p>
                <CButton
                  @click="newsModal = true"
                  color="primary"
                  size="sm"
                  variant="ghost"
                  style="text-align: right"
                >
                  Leggi
                </CButton>
              </CListGroupItem>
              <CListGroupItem class="flex-column align-items-start">
                <p style="text-align: right; margin-bottom: 0">
                  <small class="text-muted">29/07/2020</small>
                </p>
                <CBadge color="warning">
                  INFORMAZIONI SULL'OPERATIVITA'
                </CBadge>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    FINE PROROGA 30 GIORNI SUI CONTRATTI RC AUTO
                  </h5>
                </div>
                <p class="mb-1">
                  {{ news3 | truncate(150, "...") }}
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
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="4">
        <CCard id="world-list" data-aos="fade-left" md="8" class="h-100">
          <CCardHeader class="d-flex justify-content-between">
            <strong>NEWS DAL MONDO ASSICURATIVO</strong>
            <div class="card-header-actions">
              <CLink
                href="#"
                target="_blank"
                class="card-header-action btn-setting"
              >
                <strong
                  ><CIcon name="cil-justify-center" /> Elenco
                  completo...</strong
                >
              </CLink>
            </div>
          </CCardHeader>
          <CCardBody md="4">
            <CListGroup>
              <CListGroupItem>
                <CMedia aside-right=true aside-vertical-position="stretch" add-aside-classes="pippo">
                  <template #aside>
                    <CImg src="https://picsum.photos/1024/480/?image=54" width="64px" height="64px"/>
                  </template>
                                   
                  <h5 class="mt-0">Media Title</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </CMedia>
              </CListGroupItem>
              <CListGroupItem>
                <CMedia aside-right=true>
                  <h5 class="mt-0">Media Title</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </CMedia>
              </CListGroupItem>
              <CListGroupItem>
                <CMedia aside-right=true>
                  <h5 class="mt-0">Media Title</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </CMedia>
              </CListGroupItem>
            </CListGroup>
            <!-- <div class="row">
              <div class="col">
                <v-card class="mx-auto" max-width="400" min-height="440px">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://st.ilfattoquotidiano.it/wp-content/uploads/2020/12/04/bancomat_1200.jpg"
                  >
                    <v-card-title style="color: white"
                      ><strong
                        >Cashback 2021: anche bollo auto, multe e assicurazioni
                        sono inclusi</strong
                      ></v-card-title
                    >
                  </v-img>

                  <v-card-subtitle class="pb-0"
                    ><em>Fonte: Donne in Auto</em>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>
                      Dopo l’extra cashback di Natale dall’8 al 31 dicembre
                      2021, è partito il 1° gennaio 2021 il cashback 2021, che
                      sarà valido anche pe le spese relative alle auto come il
                      pagamento del bollo, delle multe, delle assicurazioni,
                      della benzina e diverse altre spese
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="orange"
                      text
                      texthref="hhttps://www.ilfattoquotidiano.it/2021/01/09/cashback-2021-anche-bollo-auto-multe-e-assicurazioni-sono-inclusi/6058382/"
                      target="_blank"
                    >
                      Leggi
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div class="col">
                <v-card class="mx-auto" max-width="400" min-height="440px">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://www.repstatic.it/content/nazionale/img/2020/12/28/075512431-664005d3-91a0-4b76-a2b2-503b1732f2e7.jpg"
                  >
                    <v-card-title style="color: white"
                      ><strong>
                        tegola per Alibaba. \"La piattaforma di pagamento online
                        viola la concorrenza\"</strong
                      ></v-card-title
                    >
                  </v-img>

                  <v-card-subtitle class="pb-0"
                    ><em>Fonte: Redazione Repubblica.it</em></v-card-subtitle
                  >

                  <v-card-text class="text--primary">
                    <div>
                      Le autorità regolatorie cinesi mettono sotto accusa la
                      società Ant. \"Deve evitare la concorrenza sleale e
                      ottenere i permessi per condurre attività di credito
                      personale\"
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="orange"
                      text
                      href="https://www.repubblica.it/economia/2020/12/28/news/nuova_tegola_per_jack_ma_la_piattaforma_di_pagamento_online_viola_la_concorrenza_-280137994/"
                      target="_blank"
                    >
                      Leggi
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <div class="col">
                <v-card class="mx-auto" max-width="400" min-height="440px">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://www.repstatic.it/content/nazionale/img/2021/01/14/223708149-58238cab-e06d-41d7-b52b-4f8827d5d195.jpg"
                  >
                    <v-card-title style="color: white"
                      ><strong
                        >Assicurazioni, ispezione Ivass a Cattolica: \"Cda non
                        prudente, a rischio solvibilità\"</strong
                      ></v-card-title
                    >
                  </v-img>

                  <v-card-subtitle class="pb-0"
                    ><em>Fonte: Redazione Repubblica.it</em></v-card-subtitle
                  >

                  <v-card-text class="text--primary">
                    <div>
                      Durissimi i rilievi su governance e controllo dei rischi,
                      la Consob chiede alla società assicurativa di integrare la
                      comunicazione fornita al mercato.  Sotto la lente anche la
                      joint venture con il Banco popolare e il ruolo del
                      presidente Bedoni. Confermato il…
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="orange"
                      text
                      href="https://www.repubblica.it/economia/finanza/2021/01/14/news/cattolica-282606090/"
                      target="_blank"
                    >
                      Leggi
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div> -->
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="1"> </CCol>
    </CRow>

    <CRow align-horizontal="center">
      <CCol md="1"> </CCol>
      <CCol sm="10" md="10">
        <div class="row">
          <div class="col-sm">
            <CCardLink href="http://broker.abybroker.it/ea2019/" target="_self">
              <CCard
                class="text-center elevation-6 portali-btn"
                body-wrapper
                style="
                  height: 200px;
                  background-image: url('img/buttons/auto.png');
                  background-position: center;
                "
                data-aos="fade-down-right"
              >
                <h1
                  style="
                    color: white;
                    font-weight: 800;
                    text-shadow: 1px 1px midnightblue;
                    font-size: 1.5vw;
                    margin-bottom: 0 !important;
                  "
                >
                  ASSICURAZIONI
                </h1>
              </CCard>
            </CCardLink>
          </div>
          <div class="col-sm">
            <CCardLink href="#" target="_self">
              <CCard
                class="text-center elevation-6 portali-btn"
                body-wrapper
                style="
                  height: 200px;
                  background-image: url('img/buttons/rami.png');
                  background-position: center;
                "
                data-aos="fade-down-left"
              >
                <h1
                  style="
                    color: white;
                    font-weight: 800;
                    text-shadow: 1px 1px midnightblue;
                    font-size: 1.5vw;
                    margin-bottom: 0 !important;
                  "
                >
                  RAMI
                </h1>
              </CCard>
            </CCardLink>
          </div>
          <div class="col-sm">
            <CCardLink href="#" target="_self">
              <CCard
                class="text-center elevation-6 portali-btn"
                body-wrapper
                style="
                  height: 200px;
                  background-image: url('img/buttons/energy.png');
                  background-position: center;
                "
                data-aos="fade-down-left"
              >
                <h1
                  style="
                    color: white;
                    font-weight: 800;
                    text-shadow: 1px 1px midnightblue;
                    font-size: 1.5vw;
                    margin-bottom: 0 !important;
                  "
                >
                  ENERGY
                </h1>
              </CCard>
            </CCardLink>
          </div>
        </div>
      </CCol>
      <CCol md="1"> </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      provanews:
        "Siamo a segnalare che i rinnovi inseriti e disponibili in piattaforma con ADRIATIC C1152 (ex Adriatic C1096) hanno la copertura RC Auto e rivalse. L’assistenza stradale o eventuali altre garanzie non sono comprese. ",
      news2:
        "Siamo a raccomandarci di mantenere quanto più possibile i rinnovi Rc auto in scadenza con la compagnia BENE ASSICURAZIONI C757. Gli importi di rinnovo per gennaio 2021 sono disponibili in piattaforma e diminuiti rispetto al 2020.  La convenzione è fondamentale per Aby Broker e conseguentemente per tutti i collaboratori, ma per mantenerla  in vita necessitiamo di rinnovare quanti più titoli possibili.  Confidiamo nella vostra collaborazione.",
      news3:
        " Dal 01° agosto 2020 non ci sarà più la proroga dei 30 giorni per le scadenze rc auto e ritornerà in vigore la normale proroga di 15 giorni. ",
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
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.elevation-6 {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.elevation-6:hover {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(21, 7, 141, 0.12) !important;
    border-color: midnightblue;
}
.pulsanti-azioni {
  background-position: center;
  background-size: auto;
  max-width: 290px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.pulsanti-azioni:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.portali-btn {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.portali-btn:hover {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.pulsanti-azioni h1 {
  color: white;
  font-weight: 800;
  text-shadow: 1px 1px midnightblue;
  font-size: 1.5vw;
  margin-bottom: 0 !important;
}

hr {
  background-color: #c6c6c6;
  border-width: 0;
  color: #999;
  height: 1px;
  line-height: 0;
  margin: 0.5em 0;
  text-align: center;
}

hr:after {
  content: "La nuova piattaforma operativa";
  font-size: 1.25em;
  position: relative;
  left: -0.5em;
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  background-color: #ebedef;
  padding-left: 1em;
  padding-right: 1em;
}

.card-header {
  border-bottom: 0px !important;
}
.card-footer {
  border-top: 0px !important;
}
#news-list .list-group-item {
  border-left: 0px !important;
  border-right: 0px !important;
  border-bottom: 0px !important;
  border-radius: 0px !important;
}
#news-list li {
  border-top: 1px solid rgba(0, 0, 21, 0.125) !important;
}
#world-list .list-group-item {
  border-left: 0px !important;
  border-right: 0px !important;
  border-bottom: 0px !important;
  border-radius: 0px !important;
}
#world-list li {
  border-top: 1px solid rgba(0, 0, 21, 0.125) !important;
}
</style>