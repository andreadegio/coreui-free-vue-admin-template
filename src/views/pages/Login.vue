<template>
  <div class="c-app flex-row align-items-center">
    
    <CContainer>
      <CRow class="justify-content-center">
       
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody class="justify-content-center">
                
                <CJumbotron
              color="info"
              text-color="white"
              border-color="dark"
            >
              <h1 class="display-3">Benvenuti in <img class="login-img" src="img/abyway_logo.png" ></h1>
              <p class="lead">
               <em>La nuova piattaforma operativa</em>
              </p>
              <hr class="my-4">
              <CForm >
                                    
                  <p class="text-muted pt-3">Effettua il login</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username"
                    required
                    was-validated
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    required
                    was-validated
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" href="http://broker.abybroker.it/accesso/login.aspx?r=ea&amp;ReturnUrl=%2fEA%2fNewDefault.aspx">Login</CButton>
                    </CCol>
                    
                  </CRow>
                </CForm>
            </CJumbotron>
               
              </CCardBody>
            </CCard>
            <!-- <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard> -->
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style scoped>
.login-img{
  vertical-align: baseline !important;
}
</style>