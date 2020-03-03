<template>
  <div class="home">
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <bokeh />
    <div class="home-wrapper">
      <nav class="navbar">
        <div class="navbar-header">
          <div>
            <a
              href="#"
              class="navbar-brand"
            >
              <div class="logo">
                <img src="~@/assets/logo.png">
              </div>
              <p />
            </a>
          </div>
        </div>
      </nav>
      <div class="container">
        <h1>🎊 Hey</h1>
        <p>This is a site created with Vue.</p>
        <p>There are some awesome demos here.</p>
        <p><b>Click the button</b> to visit the awesome example gallery!</p>
        <router-link to="/examples/vue/svg-shape-transition">
          <el-button
            round
            class="btn-go"
          >
            Go GO GO ! 🎉
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.home-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #36275d;
  a {
    color: rgba(255, 255, 255, 0.7);
  }

  .navbar {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    padding: 20px 40px;
    width: 100%;
    height: 80px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    .logo img {
      widows: 56%;
      height: 56px;
      border-radius: 50%;
    }
    .navbar-nav {
      li {
        display: inline-block;
      }
    }
  }

  .container {
    position: absolute;
    top: 200px;
    box-sizing: border-box;
    width: 100%;
    padding: 40px;
    z-index: 1;
    text-align: center;
  }
  .btn-go {
    color: #fff;
    background-color: #f66;
    border-color: #f66;
    margin-top: 20px;
  }
}

@media screen and (max-width: 670px) {
  .login-wrapper .container {
    top: 120px;
  }
}

@media screen and (min-width: 670px) {
  .mobile {
    display: none;
  }

  bokeh {
    position: fixed;
    z-index: 99999;
    width: 2vmin;
    height: 2vmin;
    border-radius: 50%;
    animation-name: explosion;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-timing-function: cubic-bezier(0.84, 0.02, 1, 1);
  }

  bokeh:nth-child(1) {
    background-color: #fc85e1;
    transform: translate(90.8152694359vw, 0.9057933065vh);
    animation-duration: 4.8530743888s;
    animation-delay: -3.309172456s;
  }

  bokeh:nth-child(2) {
    background-color: #fc85e1;
    transform: translate(5.5222409126vw, 83.410528181vh);
    animation-duration: 2.935911536s;
    animation-delay: -3.8986434494s;
  }

  bokeh:nth-child(3) {
    background-color: #ef8d22;
    transform: translate(73.6213399992vw, 69.3999721408vh);
    animation-duration: 4.3236854933s;
    animation-delay: -3.1264536511s;
  }

  bokeh:nth-child(4) {
    background-color: #2bd8ff;
    transform: translate(12.4618988319vw, 65.8509605462vh);
    animation-duration: 4.5727449565s;
    animation-delay: -3.7902144352s;
  }

  bokeh:nth-child(5) {
    background-color: #2bd8ff;
    transform: translate(77.6181256434vw, 8.7270428903vh);
    animation-duration: 2.4880197877s;
    animation-delay: -0.6636007718s;
  }

  bokeh:nth-child(6) {
    background-color: #feff28;
    transform: translate(37.5199860444vw, 17.7979545461vh);
    animation-duration: 3.9727734632s;
    animation-delay: -2.8145470967s;
  }

  bokeh:nth-child(7) {
    background-color: #fc85e1;
    transform: translate(53.3919906201vw, 28.7517148533vh);
    animation-duration: 4.5703302096s;
    animation-delay: -0.6780286475s;
  }

  bokeh:nth-child(8) {
    background-color: #ef8d22;
    transform: translate(30.1012646316vw, 79.2068898758vh);
    animation-duration: 4.4739703765s;
    animation-delay: -0.2893716361s;
  }

  bokeh:nth-child(9) {
    background-color: #feff28;
    transform: translate(49.1173831803vw, 72.5400322574vh);
    animation-duration: 2.1109780205s;
    animation-delay: -4.6607951825s;
  }

  bokeh:nth-child(10) {
    background-color: #fc85e1;
    transform: translate(74.3742220143vw, 78.4610745836vh);
    animation-duration: 4.0609992125s;
    animation-delay: -0.755575965s;
  }

  bokeh:nth-child(11) {
    background-color: #2bd8ff;
    transform: translate(52.4285939277vw, 82.6458036629vh);
    animation-duration: 3.5964373162s;
    animation-delay: -4.8086725254s;
  }

  bokeh:nth-child(12) {
    background-color: #feff28;
    transform: translate(46.458045028vw, 49.3158372345vh);
    animation-duration: 2.5372527274s;
    animation-delay: -1.4271656509s;
  }

  bokeh:nth-child(13) {
    background-color: #feff28;
    transform: translate(22.6800846632vw, 47.895233651vh);
    animation-duration: 2.3372653967s;
    animation-delay: -2.8844654757s;
  }

  bokeh:nth-child(14) {
    background-color: #feff28;
    transform: translate(99.2062800879vw, 74.1836892332vh);
    animation-duration: 4.3301410958s;
    animation-delay: -2.357793509s;
  }

  bokeh:nth-child(15) {
    background-color: #fc85e1;
    transform: translate(56.6179219704vw, 35.6771013722vh);
    animation-duration: 3.6985146766s;
    animation-delay: -1.1463535173s;
  }

  bokeh:nth-child(16) {
    background-color: #ef8d22;
    transform: translate(30.6886253989vw, 12.4605774384vh);
    animation-duration: 2.1978844178s;
    animation-delay: -1.6716298276s;
  }

  bokeh:nth-child(17) {
    background-color: #2bd8ff;
    transform: translate(24.5758879168vw, 17.3343433076vh);
    animation-duration: 2.4761035649s;
    animation-delay: -3.9099651196s;
  }

  bokeh:nth-child(18) {
    background-color: #2bd8ff;
    transform: translate(16.1859357708vw, 93.7581277723vh);
    animation-duration: 2.2385638978s;
    animation-delay: -4.1552687973s;
  }

  bokeh:nth-child(19) {
    background-color: #fc85e1;
    transform: translate(54.9374524337vw, 29.846016104vh);
    animation-duration: 3.5405457606s;
    animation-delay: -1.9515649972s;
  }

  bokeh:nth-child(20) {
    background-color: #2bd8ff;
    transform: translate(75.0244292618vw, 94.9545065338vh);
    animation-duration: 4.2408964957s;
    animation-delay: -0.8528355842s;
  }

  bokeh:nth-child(21) {
    background-color: #2bd8ff;
    transform: translate(33.3901204119vw, 42.475250084vh);
    animation-duration: 4.6389421919s;
    animation-delay: -0.3863936247s;
  }

  bokeh:nth-child(22) {
    background-color: #fc85e1;
    transform: translate(6.2113843946vw, 49.6978498444vh);
    animation-duration: 4.1041021322s;
    animation-delay: -4.3237742189s;
  }

  bokeh:nth-child(23) {
    background-color: #2bd8ff;
    transform: translate(1.7620064519vw, 42.7358469941vh);
    animation-duration: 4.2380793635s;
    animation-delay: -0.4830310665s;
  }

  bokeh:nth-child(24) {
    background-color: #2bd8ff;
    transform: translate(85.6177036905vw, 39.4284568682vh);
    animation-duration: 3.5753861258s;
    animation-delay: -4.1482377688s;
  }

  bokeh:nth-child(25) {
    background-color: #feff28;
    transform: translate(93.2498547061vw, 78.3489272064vh);
    animation-duration: 4.2045046261s;
    animation-delay: -0.0599565243s;
  }

  bokeh:nth-child(26) {
    background-color: #ef8d22;
    transform: translate(63.0089439171vw, 89.3795219666vh);
    animation-duration: 4.3662019135s;
    animation-delay: -2.5267679665s;
  }

  bokeh:nth-child(27) {
    background-color: #ef8d22;
    transform: translate(87.3446971855vw, 67.1619196558vh);
    animation-duration: 4.4367982235s;
    animation-delay: -1.8981941773s;
  }

  bokeh:nth-child(28) {
    background-color: #feff28;
    transform: translate(26.2304218178vw, 75.5034309097vh);
    animation-duration: 4.9291781144s;
    animation-delay: -0.9438972708s;
  }

  bokeh:nth-child(29) {
    background-color: #ef8d22;
    transform: translate(13.7492187758vw, 27.4149648632vh);
    animation-duration: 3.1928085447s;
    animation-delay: -0.3717011236s;
  }

  bokeh:nth-child(30) {
    background-color: #ef8d22;
    transform: translate(52.162964389vw, 61.0911653051vh);
    animation-duration: 3.608099757s;
    animation-delay: -2.7488773523s;
  }

  bokeh:nth-child(31) {
    background-color: #feff28;
    transform: translate(89.0107137766vw, 90.1883510733vh);
    animation-duration: 3.8692400108s;
    animation-delay: -4.0283897738s;
  }

  bokeh:nth-child(32) {
    background-color: #feff28;
    transform: translate(45.6967977173vw, 39.8365389312vh);
    animation-duration: 2.1061589289s;
    animation-delay: -4.5872071558s;
  }

  bokeh:nth-child(33) {
    background-color: #2bd8ff;
    transform: translate(36.0761497506vw, 74.8976779427vh);
    animation-duration: 4.8536771492s;
    animation-delay: -0.9621997306s;
  }

  bokeh:nth-child(34) {
    background-color: #feff28;
    transform: translate(97.7290001875vw, 90.8531992677vh);
    animation-duration: 3.9766900603s;
    animation-delay: -3.9814541262s;
  }

  bokeh:nth-child(35) {
    background-color: #fc85e1;
    transform: translate(32.3329746782vw, 23.818641443vh);
    animation-duration: 3.2787154125s;
    animation-delay: -0.7045575586s;
  }

  bokeh:nth-child(36) {
    background-color: #fc85e1;
    transform: translate(83.0503630236vw, 78.173207087vh);
    animation-duration: 3.6671960983s;
    animation-delay: -3.3334685171s;
  }

  bokeh:nth-child(37) {
    background-color: #fc85e1;
    transform: translate(68.573711533vw, 86.9114538528vh);
    animation-duration: 3.6054810715s;
    animation-delay: -1.635379361s;
  }

  bokeh:nth-child(38) {
    background-color: #feff28;
    transform: translate(98.6469122917vw, 11.2886939694vh);
    animation-duration: 4.8323918109s;
    animation-delay: -0.4890724511s;
  }

  bokeh:nth-child(39) {
    background-color: #fc85e1;
    transform: translate(67.8597690969vw, 89.0500613957vh);
    animation-duration: 2.9851213438s;
    animation-delay: -2.9152701504s;
  }

  bokeh:nth-child(40) {
    background-color: #2bd8ff;
    transform: translate(19.8063713944vw, 33.2922544002vh);
    animation-duration: 2.1363585997s;
    animation-delay: -4.0367850835s;
  }

  bokeh:nth-child(41) {
    background-color: #fc85e1;
    transform: translate(24.5069592416vw, 44.0182431309vh);
    animation-duration: 4.1688484119s;
    animation-delay: -4.7237722833s;
  }

  bokeh:nth-child(42) {
    background-color: #fc85e1;
    transform: translate(57.1261903447vw, 68.98944261vh);
    animation-duration: 3.2059555921s;
    animation-delay: -4.1216452052s;
  }

  bokeh:nth-child(43) {
    background-color: #feff28;
    transform: translate(90.408478128vw, 95.2250278608vh);
    animation-duration: 2.3358029617s;
    animation-delay: -3.7175402247s;
  }

  bokeh:nth-child(44) {
    background-color: #ef8d22;
    transform: translate(23.6800810832vw, 93.922184833vh);
    animation-duration: 3.1193473996s;
    animation-delay: -4.5606382468s;
  }

  bokeh:nth-child(45) {
    background-color: #fc85e1;
    transform: translate(69.6254021992vw, 65.7368411844vh);
    animation-duration: 2.874297227s;
    animation-delay: -0.6889007311s;
  }

  bokeh:nth-child(46) {
    background-color: #fc85e1;
    transform: translate(26.8265854667vw, 36.7094152766vh);
    animation-duration: 3.6635191873s;
    animation-delay: -3.6279931963s;
  }

  bokeh:nth-child(47) {
    background-color: #feff28;
    transform: translate(36.8455717578vw, 55.2282619023vh);
    animation-duration: 4.201773245s;
    animation-delay: -3.9714118063s;
  }

  bokeh:nth-child(48) {
    background-color: #fc85e1;
    transform: translate(38.307589035vw, 21.400942634vh);
    animation-duration: 4.4069478777s;
    animation-delay: -3.1892238301s;
  }

  bokeh:nth-child(49) {
    background-color: #ef8d22;
    transform: translate(96.2393377762vw, 76.468726941vh);
    animation-duration: 3.1531214876s;
    animation-delay: -4.0194082854s;
  }

  bokeh:nth-child(50) {
    background-color: #2bd8ff;
    transform: translate(84.7251027871vw, 89.4169874675vh);
    animation-duration: 4.3349730968s;
    animation-delay: -2.5288505682s;
  }

  bokeh:nth-child(51) {
    background-color: #fc85e1;
    transform: translate(96.2870556804vw, 38.2772794599vh);
    animation-duration: 4.1997315896s;
    animation-delay: -2.881470501s;
  }

  bokeh:nth-child(52) {
    background-color: #ef8d22;
    transform: translate(68.1994761869vw, 74.5665392237vh);
    animation-duration: 2.4656994272s;
    animation-delay: -3.3666606735s;
  }

  bokeh:nth-child(53) {
    background-color: #2bd8ff;
    transform: translate(24.4883767311vw, 55.8635709808vh);
    animation-duration: 2.3037397177s;
    animation-delay: -2.4435892986s;
  }

  bokeh:nth-child(54) {
    background-color: #2bd8ff;
    transform: translate(8.3154227118vw, 95.8031518195vh);
    animation-duration: 2.063200919s;
    animation-delay: -3.6371140543s;
  }

  bokeh:nth-child(55) {
    background-color: #feff28;
    transform: translate(53.2802550803vw, 13.6928608885vh);
    animation-duration: 4.0490674265s;
    animation-delay: -2.2314097337s;
  }

  bokeh:nth-child(56) {
    background-color: #ef8d22;
    transform: translate(26.3867915492vw, 39.0437659516vh);
    animation-duration: 4.7411907497s;
    animation-delay: -4.4441481942s;
  }

  bokeh:nth-child(57) {
    background-color: #2bd8ff;
    transform: translate(31.0053745351vw, 6.7120971723vh);
    animation-duration: 4.8794410805s;
    animation-delay: -0.5267865783s;
  }

  bokeh:nth-child(58) {
    background-color: #fc85e1;
    transform: translate(37.6702531181vw, 61.6697906199vh);
    animation-duration: 3.826704691s;
    animation-delay: -3.8969278469s;
  }

  bokeh:nth-child(59) {
    background-color: #feff28;
    transform: translate(93.7160719581vw, 53.8989983704vh);
    animation-duration: 4.6732473937s;
    animation-delay: -3.4273866826s;
  }

  bokeh:nth-child(60) {
    background-color: #2bd8ff;
    transform: translate(25.3099530226vw, 54.6621341301vh);
    animation-duration: 4.9290639962s;
    animation-delay: -1.5300147768s;
  }

  bokeh:nth-child(61) {
    background-color: #fc85e1;
    transform: translate(59.6633596541vw, 67.2151837016vh);
    animation-duration: 4.836188826s;
    animation-delay: -2.6238460902s;
  }

  bokeh:nth-child(62) {
    background-color: #fc85e1;
    transform: translate(71.6692327613vw, 56.1916798816vh);
    animation-duration: 4.6419675526s;
    animation-delay: -4.3063796658s;
  }

  bokeh:nth-child(63) {
    background-color: #ef8d22;
    transform: translate(57.1772904786vw, 58.2227912291vh);
    animation-duration: 3.9949982286s;
    animation-delay: -0.175540732s;
  }

  bokeh:nth-child(64) {
    background-color: #2bd8ff;
    transform: translate(25.877620246vw, 47.2145888662vh);
    animation-duration: 2.2597051409s;
    animation-delay: -2.0307211152s;
  }

  bokeh:nth-child(65) {
    background-color: #fc85e1;
    transform: translate(52.2471615406vw, 63.1390187444vh);
    animation-duration: 3.957595598s;
    animation-delay: -4.0452946811s;
  }

  bokeh:nth-child(66) {
    background-color: #feff28;
    transform: translate(47.3462525927vw, 13.2930564366vh);
    animation-duration: 2.5808880635s;
    animation-delay: -2.0770326463s;
  }

  bokeh:nth-child(67) {
    background-color: #fc85e1;
    transform: translate(90.5454700363vw, 95.0710291478vh);
    animation-duration: 3.2162879822s;
    animation-delay: -4.469447556s;
  }

  bokeh:nth-child(68) {
    background-color: #2bd8ff;
    transform: translate(81.5567737505vw, 2.1155111863vh);
    animation-duration: 2.6232001027s;
    animation-delay: -0.7152766282s;
  }

  bokeh:nth-child(69) {
    background-color: #fc85e1;
    transform: translate(28.1459049479vw, 87.4622599298vh);
    animation-duration: 4.9485808879s;
    animation-delay: -4.5449444673s;
  }

  bokeh:nth-child(70) {
    background-color: #2bd8ff;
    transform: translate(11.4844754828vw, 68.4662648957vh);
    animation-duration: 4.1326433355s;
    animation-delay: -3.6370473244s;
  }

  bokeh:nth-child(71) {
    background-color: #2bd8ff;
    transform: translate(12.0457163478vw, 52.1320299155vh);
    animation-duration: 2.8516587788s;
    animation-delay: -3.6017698149s;
  }

  bokeh:nth-child(72) {
    background-color: #fc85e1;
    transform: translate(92.4295010507vw, 17.978111573vh);
    animation-duration: 2.8793361003s;
    animation-delay: -0.4679557965s;
  }

  bokeh:nth-child(73) {
    background-color: #feff28;
    transform: translate(68.2202577209vw, 32.6766265198vh);
    animation-duration: 2.2703881725s;
    animation-delay: -4.9608389517s;
  }

  bokeh:nth-child(74) {
    background-color: #ef8d22;
    transform: translate(45.3322480355vw, 69.2881263234vh);
    animation-duration: 3.2773417142s;
    animation-delay: -2.6474060112s;
  }

  bokeh:nth-child(75) {
    background-color: #fc85e1;
    transform: translate(29.7504375991vw, 97.5708976183vh);
    animation-duration: 3.6268365584s;
    animation-delay: -4.8526935958s;
  }

  bokeh:nth-child(76) {
    background-color: #2bd8ff;
    transform: translate(99.2704559835vw, 42.2086022001vh);
    animation-duration: 3.8343965409s;
    animation-delay: -4.378162251s;
  }

  bokeh:nth-child(77) {
    background-color: #feff28;
    transform: translate(37.6882792629vw, 43.3681283504vh);
    animation-duration: 3.5125209876s;
    animation-delay: -0.6646449234s;
  }

  bokeh:nth-child(78) {
    background-color: #2bd8ff;
    transform: translate(2.5169915236vw, 25.6749354083vh);
    animation-duration: 3.7514049919s;
    animation-delay: -4.1149550009s;
  }

  bokeh:nth-child(79) {
    background-color: #ef8d22;
    transform: translate(0.4179205366vw, 78.4907610255vh);
    animation-duration: 4.7304025842s;
    animation-delay: -4.2107200404s;
  }

  bokeh:nth-child(80) {
    background-color: #ef8d22;
    transform: translate(96.2845199807vw, 63.9460774349vh);
    animation-duration: 3.021103619s;
    animation-delay: -0.9596617563s;
  }

  bokeh:nth-child(81) {
    background-color: #2bd8ff;
    transform: translate(96.9319514086vw, 8.7839749415vh);
    animation-duration: 3.5332553167s;
    animation-delay: -1.0985040226s;
  }

  bokeh:nth-child(82) {
    background-color: #ef8d22;
    transform: translate(40.2370068982vw, 31.7190977457vh);
    animation-duration: 2.7244424412s;
    animation-delay: -2.7283755719s;
  }

  bokeh:nth-child(83) {
    background-color: #2bd8ff;
    transform: translate(1.2854762932vw, 75.9119943197vh);
    animation-duration: 4.2425329504s;
    animation-delay: -1.6905667948s;
  }

  bokeh:nth-child(84) {
    background-color: #2bd8ff;
    transform: translate(43.3366010862vw, 33.0034009784vh);
    animation-duration: 4.3706209004s;
    animation-delay: -4.2723164403s;
  }

  bokeh:nth-child(85) {
    background-color: #ef8d22;
    transform: translate(73.6934054339vw, 20.2453901887vh);
    animation-duration: 2.3478458449s;
    animation-delay: -0.3847812482s;
  }

  bokeh:nth-child(86) {
    background-color: #ef8d22;
    transform: translate(53.0342847259vw, 43.0722715588vh);
    animation-duration: 3.7151089953s;
    animation-delay: -1.3460407586s;
  }

  bokeh:nth-child(87) {
    background-color: #ef8d22;
    transform: translate(62.7314074382vw, 67.1465287528vh);
    animation-duration: 4.1694263621s;
    animation-delay: -3.4522099393s;
  }

  bokeh:nth-child(88) {
    background-color: #ef8d22;
    transform: translate(52.5993548938vw, 87.9380241842vh);
    animation-duration: 3.2131664111s;
    animation-delay: -2.5582649526s;
  }

  bokeh:nth-child(89) {
    background-color: #2bd8ff;
    transform: translate(72.6932387966vw, 76.9996519616vh);
    animation-duration: 2.9583732316s;
    animation-delay: -0.6554042167s;
  }

  bokeh:nth-child(90) {
    background-color: #ef8d22;
    transform: translate(31.3073478695vw, 65.4160336621vh);
    animation-duration: 4.9054883239s;
    animation-delay: -0.3637578706s;
  }

  bokeh:nth-child(91) {
    background-color: #ef8d22;
    transform: translate(19.3069984819vw, 20.0797141474vh);
    animation-duration: 4.1834795563s;
    animation-delay: -0.6658118233s;
  }

  bokeh:nth-child(92) {
    background-color: #2bd8ff;
    transform: translate(52.7944718926vw, 61.2812998373vh);
    animation-duration: 4.7279935114s;
    animation-delay: -1.1024056485s;
  }

  bokeh:nth-child(93) {
    background-color: #ef8d22;
    transform: translate(69.5460605782vw, 96.6861963433vh);
    animation-duration: 3.5173769814s;
    animation-delay: -4.2119972246s;
  }

  bokeh:nth-child(94) {
    background-color: #feff28;
    transform: translate(65.1495633998vw, 50.2021531857vh);
    animation-duration: 2.3589350209s;
    animation-delay: -1.5342732649s;
  }

  bokeh:nth-child(95) {
    background-color: #fc85e1;
    transform: translate(56.6945542423vw, 56.7369419472vh);
    animation-duration: 2.4011527711s;
    animation-delay: -0.2735135401s;
  }

  bokeh:nth-child(96) {
    background-color: #ef8d22;
    transform: translate(77.4293981729vw, 56.3388496867vh);
    animation-duration: 4.415284649s;
    animation-delay: -3.7312811629s;
  }

  bokeh:nth-child(97) {
    background-color: #2bd8ff;
    transform: translate(34.2777976038vw, 18.4378748836vh);
    animation-duration: 3.2612423515s;
    animation-delay: -3.7451867886s;
  }

  bokeh:nth-child(98) {
    background-color: #feff28;
    transform: translate(28.9079698243vw, 13.0047034536vh);
    animation-duration: 4.2078102643s;
    animation-delay: -0.6643139299s;
  }

  bokeh:nth-child(99) {
    background-color: #2bd8ff;
    transform: translate(12.7997396104vw, 6.5599982966vh);
    animation-duration: 2.9196815569s;
    animation-delay: -2.6500195108s;
  }

  bokeh:nth-child(100) {
    background-color: #fc85e1;
    transform: translate(8.4517682185vw, 38.1956569585vh);
    animation-duration: 4.7818799318s;
    animation-delay: -4.3644189033s;
  }

  @keyframes explosion {
    0% {
      opacity: 0;
    }

    70% {
      opacity: 1;
    }

    100% {
      transform: translate(50vw, 100vh);
    }
  }
}
</style>
