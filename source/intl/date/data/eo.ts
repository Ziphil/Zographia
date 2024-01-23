//

import {registerDateFormat} from "../register";


registerDateFormat("eo", {
  weekday: {
    long: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
    short: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
    minimal: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_")
  },
  month: {
    long: "Januaro_Februaro_Marto_Aprilo_Majo_Junio_Julio_Aŭgusto_Septembro_Oktobro_Novembro_Decembro".split("_"),
    short: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aŭg_Sep_Okt_Nov_Dec".split("_")
  }
});