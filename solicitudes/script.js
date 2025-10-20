// Datos de provincias y distritos
const provinciasData = {
    "01": [
        { codigo: "0101", nombre: "CHACHAPOYAS" },
        { codigo: "0102", nombre: "BAGUA" },
        { codigo: "0103", nombre: "BONGARA" },
        { codigo: "0104", nombre: "CONDORCANQUI" },
        { codigo: "0105", nombre: "LUYA" },
        { codigo: "0106", nombre: "RODRIGUEZ DE MENDOZA" },
        { codigo: "0107", nombre: "UTCUBAMBA" }
    ],
    "02": [
        { codigo: "0201", nombre: "HUARAZ" },
        { codigo: "0202", nombre: "AIJA" },
        { codigo: "0203", nombre: "ANTONIO RAYMONDI" },
        { codigo: "0204", nombre: "ASUNCION" },
        { codigo: "0205", nombre: "BOLOGNESI" },
        { codigo: "0206", nombre: "CARHUAZ" },
        { codigo: "0207", nombre: "CARLOS FERMIN FITZCARRALD" },
        { codigo: "0208", nombre: "CASMA" },
        { codigo: "0209", nombre: "CORONGO" },
        { codigo: "0210", nombre: "HUARI" },
        { codigo: "0211", nombre: "HUARMEY" },
        { codigo: "0212", nombre: "HUAYLAS" },
        { codigo: "0213", nombre: "MARISCAL LUZURIAGA" },
        { codigo: "0214", nombre: "OCROS" },
        { codigo: "0215", nombre: "PALLASCA" },
        { codigo: "0216", nombre: "POMABAMBA" },
        { codigo: "0217", nombre: "RECUAY" },
        { codigo: "0218", nombre: "SANTA" },
        { codigo: "0219", nombre: "SIHUAS" },
        { codigo: "0220", nombre: "YUNGAY" }
    ],
    "03": [
        { codigo: "0301", nombre: "ABANCAY" },
        { codigo: "0302", nombre: "ANDAHUAYLAS" },
        { codigo: "0303", nombre: "ANTABAMBA" },
        { codigo: "0304", nombre: "AYMARAES" },
        { codigo: "0305", nombre: "COTABAMBAS" },
        { codigo: "0306", nombre: "CHINCHEROS" },
        { codigo: "0307", nombre: "GRAU" }
    ],
    "04": [
        { codigo: "0401", nombre: "AREQUIPA" },
        { codigo: "0402", nombre: "CAMANA" },
        { codigo: "0403", nombre: "CARAVELI" },
        { codigo: "0404", nombre: "CASTILLA" },
        { codigo: "0405", nombre: "CAYLLOMA" },
        { codigo: "0406", nombre: "CONDESUYOS" },
        { codigo: "0407", nombre: "ISLAY" },
        { codigo: "0408", nombre: "LA UNION" }
    ],
    "05": [
        { codigo: "0501", nombre: "HUAMANGA" },
        { codigo: "0502", nombre: "CANGALLO" },
        { codigo: "0503", nombre: "HUANCA SANCOS" },
        { codigo: "0504", nombre: "HUANTA" },
        { codigo: "0505", nombre: "LA MAR" },
        { codigo: "0506", nombre: "LUCANAS" },
        { codigo: "0507", nombre: "PARINACOCHAS" },
        { codigo: "0508", nombre: "PAUCAR DEL SARA SARA" },
        { codigo: "0509", nombre: "SUCRE" },
        { codigo: "0510", nombre: "VICTOR FAJARDO" },
        { codigo: "0511", nombre: "VILCAS HUAMAN" }
    ],
    "06": [
        { codigo: "0601", nombre: "CAJAMARCA" },
        { codigo: "0602", nombre: "CAJABAMBA" },
        { codigo: "0603", nombre: "CELENDÍN" },
        { codigo: "0604", nombre: "CHOTA" },
        { codigo: "0605", nombre: "CONTUMAZÁ" },
        { codigo: "0606", nombre: "CUTERVO" },
        { codigo: "0607", nombre: "HUALGAYOC" },
        { codigo: "0608", nombre: "JAÉN" },
        { codigo: "0609", nombre: "SAN IGNACIO" },
        { codigo: "0610", nombre: "SAN MARCOS" },
        { codigo: "0611", nombre: "SAN MIGUEL" },
        { codigo: "0612", nombre: "SAN PABLO" },
        { codigo: "0613", nombre: "SANTA CRUZ" }
    ],
    "07": [
        { codigo: "0701", nombre: "CALLAO" }
    ],
    "08": [
        { codigo: "0801", nombre: "CUSCO" },
        { codigo: "0802", nombre: "ACOMAYO" },
        { codigo: "0803", nombre: "ANTA" },
        { codigo: "0804", nombre: "CALCA" },
        { codigo: "0805", nombre: "CANAS" },
        { codigo: "0806", nombre: "CANCHIS" },
        { codigo: "0807", nombre: "CHUMBIVILCAS" },
        { codigo: "0808", nombre: "ESPINAR" },
        { codigo: "0809", nombre: "LA CONVENCIÓN" },
        { codigo: "0810", nombre: "PARURO" },
        { codigo: "0811", nombre: "PAUCARTAMBO" },
        { codigo: "0812", nombre: "QUISPICANCHI" },
        { codigo: "0813", nombre: "URUBAMBA" }
    ],
    "09": [
        { codigo: "0901", nombre: "HUANCAVELICA" },
        { codigo: "0902", nombre: "ACOBAMBA" },
        { codigo: "0903", nombre: "ANGARAES" },
        { codigo: "0904", nombre: "CASTROVIRREYNA" },
        { codigo: "0905", nombre: "CHURCAMPA" },
        { codigo: "0906", nombre: "HUAYTARÁ" },
        { codigo: "0907", nombre: "TAYACAJA" }
    ],
    "10": [
        { codigo: "1001", nombre: "HUÁNUCO" },
        { codigo: "1002", nombre: "AMBO" },
        { codigo: "1003", nombre: "DOS DE MAYO" },
        { codigo: "1004", nombre: "HUACAYBAMBA" },
        { codigo: "1005", nombre: "HUAMALÍES" },
        { codigo: "1006", nombre: "LEONCIO PRADO" },
        { codigo: "1007", nombre: "MARAÑÓN" },
        { codigo: "1008", nombre: "PACHITEA" },
        { codigo: "1009", nombre: "PUERTO INCA" },
        { codigo: "1010", nombre: "LAURICOCHA" },
        { codigo: "1011", nombre: "YAROWILCA" }
    ],
    "11": [
        { codigo: "1101", nombre: "ICA" },
        { codigo: "1102", nombre: "CHINCHA" },
        { codigo: "1103", nombre: "NAZCA" },
        { codigo: "1104", nombre: "PALPA" },
        { codigo: "1105", nombre: "PISCO" }
    ],
    "12": [
        { codigo: "1201", nombre: "HUANCAYO" },
        { codigo: "1202", nombre: "CONCEPCIÓN" },
        { codigo: "1203", nombre: "CHANCHAMAYO" },
        { codigo: "1204", nombre: "JAUJA" },
        { codigo: "1205", nombre: "JUNÍN" },
        { codigo: "1206", nombre: "SATIPO" },
        { codigo: "1207", nombre: "TARMA" },
        { codigo: "1208", nombre: "YAULI" },
        { codigo: "1209", nombre: "CHUPACA" }
    ],
    "13": [
        { codigo: "1301", nombre: "TRUJILLO" },
        { codigo: "1302", nombre: "ASCOPE" },
        { codigo: "1303", nombre: "BOLÍVAR" },
        { codigo: "1304", nombre: "CHEPÉN" },
        { codigo: "1305", nombre: "JULCÁN" },
        { codigo: "1306", nombre: "OTUZCO" },
        { codigo: "1307", nombre: "PACASMAYO" },
        { codigo: "1308", nombre: "PATAZ" },
        { codigo: "1309", nombre: "SÁNCHEZ CARRIÓN" },
        { codigo: "1310", nombre: "SANTIAGO DE CHUCO" },
        { codigo: "1311", nombre: "GRAN CHIMÚ" },
        { codigo: "1312", nombre: "VIRÚ" }
    ],
    "14": [
        { codigo: "1401", nombre: "CHICLAYO" },
        { codigo: "1402", nombre: "FERREÑAFE" },
        { codigo: "1403", nombre: "LAMBAYEQUE" }
    ],
    "15": [
        { codigo: "1501", nombre: "LIMA" },
        { codigo: "1502", nombre: "BARRANCA" },
        { codigo: "1503", nombre: "CAJATAMBO" },
        { codigo: "1504", nombre: "CANTA" },
        { codigo: "1505", nombre: "CAÑETE" },
        { codigo: "1506", nombre: "HUARAL" },
        { codigo: "1507", nombre: "HUAROCHIRI" },
        { codigo: "1508", nombre: "HUAURA" },
        { codigo: "1509", nombre: "OYON" },
        { codigo: "1510", nombre: "YAUYOS" }
    ],
    "16": [
        { codigo: "1601", nombre: "MAYNAS" },
        { codigo: "1602", nombre: "ALTO AMAZONAS" },
        { codigo: "1603", nombre: "LORETO" },
        { codigo: "1604", nombre: "MARISCAL RAMÓN CASTILLA" },
        { codigo: "1605", nombre: "REQUENA" },
        { codigo: "1606", nombre: "UCAYALI" },
        { codigo: "1607", nombre: "DATEM DEL MARAÑÓN" },
        { codigo: "1608", nombre: "PUTUMAYO" }
    ],
    "17": [
        { codigo: "1701", nombre: "TAMBOPATA" },
        { codigo: "1702", nombre: "MANU" },
        { codigo: "1703", nombre: "TAHUAMANU" }
    ],
    "18": [
        { codigo: "1801", nombre: "MARISCAL NIETO" },
        { codigo: "1802", nombre: "GENERAL SÁNCHEZ CERRO" },
        { codigo: "1803", nombre: "ILO" }
    ],
    "19": [
        { codigo: "1901", nombre: "PASCO" },
        { codigo: "1902", nombre: "DANIEL ALCIDES CARRIÓN" },
        { codigo: "1903", nombre: "OXAPAMPA" }
    ],
    "20": [
        { codigo: "2001", nombre: "PIURA" },
        { codigo: "2002", nombre: "AYABACA" },
        { codigo: "2003", nombre: "HUANCABAMBA" },
        { codigo: "2004", nombre: "MORROPÓN" },
        { codigo: "2005", nombre: "PAITA" },
        { codigo: "2006", nombre: "SULLANA" },
        { codigo: "2007", nombre: "TALARA" },
        { codigo: "2008", nombre: "SECHURA" }
    ],
    "21": [
        { codigo: "2101", nombre: "PUNO" },
        { codigo: "2102", nombre: "AZÁNGARO" },
        { codigo: "2103", nombre: "CARABAYA" },
        { codigo: "2104", nombre: "CHUCUITO" },
        { codigo: "2105", nombre: "EL COLLAO" },
        { codigo: "2106", nombre: "HUANCANÉ" },
        { codigo: "2107", nombre: "LAMPA" },
        { codigo: "2108", nombre: "MELGAR" },
        { codigo: "2109", nombre: "MOHO" },
        { codigo: "2110", nombre: "SAN ANTONIO DE PUTINA" },
        { codigo: "2111", nombre: "SAN ROMÁN" },
        { codigo: "2112", nombre: "SANDIA" },
        { codigo: "2113", nombre: "YUNGUYO" }
    ],
    "22": [
        { codigo: "2201", nombre: "MOYOBAMBA" },
        { codigo: "2202", nombre: "BELLAVISTA" },
        { codigo: "2203", nombre: "EL DORADO" },
        { codigo: "2204", nombre: "HUALLAGA" },
        { codigo: "2205", nombre: "LAMAS" },
        { codigo: "2206", nombre: "MARISCAL CÁCERES" },
        { codigo: "2207", nombre: "PICOTA" },
        { codigo: "2208", nombre: "RIOJA" },
        { codigo: "2209", nombre: "SAN MARTÍN" },
        { codigo: "2210", nombre: "TOCACHE" }
    ],
    "23": [
        { codigo: "2301", nombre: "TACNA" },
        { codigo: "2302", nombre: "CANDARAVE" },
        { codigo: "2303", nombre: "JORGE BASADRE" },
        { codigo: "2304", nombre: "TARATA" }
    ],
    "24": [
        { codigo: "2401", nombre: "TUMBES" },
        { codigo: "2402", nombre: "CONTRALMIRANTE VILLAR" },
        { codigo: "2403", nombre: "ZARUMILLA" }
    ],
    "25": [
        { codigo: "2501", nombre: "CORONEL PORTILLO" },
        { codigo: "2502", nombre: "ATALAYA" },
        { codigo: "2503", nombre: "PADRE ABAD" },
        { codigo: "2504", nombre: "PURÚS" }
    ],
    "26": [
        { codigo: "2501", nombre: "CORONEL PORTILLO" },
        { codigo: "2502", nombre: "ATALAYA" },
        { codigo: "2503", nombre: "PADRE ABAD" },
        { codigo: "2504", nombre: "PURÚS" }
    ],
};

const distritosData = {
    "1501": [
        { codigo: "150101", nombre: "LIMA" },
        { codigo: "150102", nombre: "ANCON" },
        { codigo: "150103", nombre: "ATE" },
        { codigo: "150104", nombre: "BARRANCO" },
        { codigo: "150105", nombre: "BREÑA" },
        { codigo: "150106", nombre: "CARABAYLLO" },
        { codigo: "150107", nombre: "CHACLACAYO" },
        { codigo: "150108", nombre: "CHORRILLOS" },
        { codigo: "150109", nombre: "CIENEGUILLA" },
        { codigo: "150110", nombre: "COMAS" },
        { codigo: "150111", nombre: "EL AGUSTINO" },
        { codigo: "150112", nombre: "INDEPENDENCIA" },
        { codigo: "150113", nombre: "JESUS MARIA" },
        { codigo: "150114", nombre: "LA MOLINA" },
        { codigo: "150115", nombre: "LA VICTORIA" },
        { codigo: "150116", nombre: "LINCE" },
        { codigo: "150117", nombre: "LOS OLIVOS" },
        { codigo: "150118", nombre: "LURIGANCHO" },
        { codigo: "150119", nombre: "LURIN" },
        { codigo: "150120", nombre: "MAGDALENA DEL MAR" },
        { codigo: "150121", nombre: "MAGDALENA VIEJA" },
        { codigo: "150122", nombre: "MIRAFLORES" },
        { codigo: "150123", nombre: "PACHACAMAC" },
        { codigo: "150124", nombre: "PUCUSANA" },
        { codigo: "150125", nombre: "PUEBLO LIBRE" },
        { codigo: "150126", nombre: "PUENTE PIEDRA" },
        { codigo: "150127", nombre: "RIMAC" },
        { codigo: "150128", nombre: "SAN BARTOLO" },
        { codigo: "150129", nombre: "SAN BORJA" },
        { codigo: "150130", nombre: "SAN ISIDRO" },
        { codigo: "150131", nombre: "SAN JUAN DE LURIGANCHO" },
        { codigo: "150132", nombre: "SAN JUAN DE MIRAFLORES" },
        { codigo: "150133", nombre: "SAN LUIS" },
        { codigo: "150134", nombre: "SAN MARTIN DE PORRES" },
        { codigo: "150135", nombre: "SAN MIGUEL" },
        { codigo: "150136", nombre: "SANTA ANITA" },
        { codigo: "150137", nombre: "SANTA MARIA DEL MAR" },
        { codigo: "150138", nombre: "SANTA ROSA" },
        { codigo: "150139", nombre: "SANTIAGO DE SURCO" },
        { codigo: "150140", nombre: "SURQUILLO" },
        { codigo: "150141", nombre: "VILLA EL SALVADOR" },
        { codigo: "150142", nombre: "VILLA MARIA DEL TRIUNFO" }
    ],
    "1502": [ // distritos de BARRANCA
        { codigo: "150201", nombre: "BARRANCA" },
        { codigo: "150202", nombre: "PARAMONGA" },
        { codigo: "150203", nombre: "PATIVILCA" },
        { codigo: "150204", nombre: "SUPE" },
        { codigo: "150205", nombre: "SUPE PUERTO" }
    ],
    "1503": [ // distrito de CAJATAMBO
        { codigo: "150301", nombre: "CAJATAMBO" },
        { codigo: "150302", nombre: "COPA" },
        { codigo: "150303", nombre: "GORGOR" },
        { codigo: "150304", nombre: "HUANCAPON" },
        { codigo: "150305", nombre: "MANAS" }
    ],
    "1504": [ // distrtitos de CANTA
        { codigo: "150401", nombre: "CANTA" },
        { codigo: "150402", nombre: "ARAHUAY" },
        { codigo: "150403", nombre: "HUAMANTANGA" },
        { codigo: "150404", nombre: "HUAROS" },
        { codigo: "150405", nombre: "LACHAQUI" },
        { codigo: "150406", nombre: "SAN BUENAVENTURA" },
        { codigo: "150407", nombre: "SANTA ROSA DE QUIVES" }
    ],
    "1505": [ // distrtitos de CAÑETE
        { codigo: "150501", nombre: "SAN VICENTE DE CAÑETE" },
        { codigo: "150502", nombre: "ASIA" },
        { codigo: "150503", nombre: "CALANGO" },
        { codigo: "150504", nombre: "CERRO AZUL" },
        { codigo: "150505", nombre: "CHILCA" },
        { codigo: "150506", nombre: "COAYLLO" },
        { codigo: "150507", nombre: "IMPERIAL" },
        { codigo: "150508", nombre: "LUNAHUANA" },
        { codigo: "150509", nombre: "MALA" },
        { codigo: "150510", nombre: "NUEVO IMPERIAL" },
        { codigo: "150511", nombre: "PACARAN" },
        { codigo: "150512", nombre: "QUILMANA" },
        { codigo: "150513", nombre: "SAN ANTONIO" },
        { codigo: "150514", nombre: "SAN LUIS" },
        { codigo: "150515", nombre: "SANTA CRUZ DE FLORES" },
        { codigo: "150516", nombre: "ZUÑIGA" }
    ],
    "1506": [ // distrtitos de HUARAL
        { codigo: "150601", nombre: "HUARAL" },
        { codigo: "150602", nombre: "ATAVILLOS ALTO" },
        { codigo: "150603", nombre: "ATAVILLOS BAJO" },
        { codigo: "150604", nombre: "AUCALLAMA" },
        { codigo: "150605", nombre: "CHANCAY" },
        { codigo: "150606", nombre: "IHUARI" },
        { codigo: "150607", nombre: "LAMPIAN" },
        { codigo: "150608", nombre: "PACARAOS" },
        { codigo: "150609", nombre: "SAN MIGUEL DE ACOS" },
        { codigo: "150610", nombre: "SANTA CRUZ DE ANDAMARCA" },
        { codigo: "150611", nombre: "SUMBILCA" },
        { codigo: "150612", nombre: "VEINTISIETE DE NOVIEMBRE" }
    ],
    "1507": [ // distritos de HUAROCHIRI
        { codigo: "150701", nombre: "MATUCANA" },
        { codigo: "150702", nombre: "ANTIOQUIA" },
        { codigo: "150703", nombre: "CALLAHUANCA" },
        { codigo: "150704", nombre: "CARAMPOMA" },
        { codigo: "150705", nombre: "CHICLA" },
        { codigo: "150706", nombre: "CUENCA" },
        { codigo: "150707", nombre: "HUACHUPAMPA" },
        { codigo: "150708", nombre: "HUANZA" },
        { codigo: "150709", nombre: "HUAROCHIRI" },
        { codigo: "150710", nombre: "LAHUAYTAMBO" },
        { codigo: "150711", nombre: "LANGA" },
        { codigo: "150712", nombre: "LARAOS" },
        { codigo: "150713", nombre: "MARIATANA" },
        { codigo: "150714", nombre: "RICARDO PALMA" },
        { codigo: "150715", nombre: "SAN ANDRES DE TUPICOCHA" },
        { codigo: "150716", nombre: "SAN ANTONIO" },
        { codigo: "150717", nombre: "SAN BARTOLOME" },
        { codigo: "150718", nombre: "SAN DAMIAN" },
        { codigo: "150719", nombre: "SAN JUAN DE IRIS" },
        { codigo: "150720", nombre: "SAN JUAN DE TANTARANCHE" },
        { codigo: "150721", nombre: "SAN LORENZO DE QUINTI" },
        { codigo: "150722", nombre: "SAN MATEO" },
        { codigo: "150723", nombre: "SAN MATEO DE OTAO" },
        { codigo: "150724", nombre: "SAN PEDRO DE CASTA" },
        { codigo: "150725", nombre: "SAN PEDRO DE HUANCAYRE" },
        { codigo: "150726", nombre: "SANGALLAYA" },
        { codigo: "150727", nombre: "SANTA CRUZ DE COCACHACRA" },
        { codigo: "150728", nombre: "SANTA EULALIA" },
        { codigo: "150729", nombre: "SANTIAGO DE ANCHUCAYA" },
        { codigo: "150730", nombre: "SANTIAGO DE TUNA" },
        { codigo: "150731", nombre: "SANTO DOMINGO DE LOS OLLEROS" },
        { codigo: "150732", nombre: "SURCO" }
    ],
    "1508": [ // distritos de HUAURA
        { codigo: "150801", nombre: "HUACHO" },
        { codigo: "150802", nombre: "AMBAR" },
        { codigo: "150803", nombre: "CALETA DE CARQUIN" },
        { codigo: "150804", nombre: "CHECRAS" },
        { codigo: "150805", nombre: "HUALMAY" },
        { codigo: "150806", nombre: "HUAURA" },
        { codigo: "150807", nombre: "LEONCIO PRADO" },
        { codigo: "150808", nombre: "PACCHO" },
        { codigo: "150809", nombre: "SANTA LEONOR" },
        { codigo: "150810", nombre: "SANTA MARIA" },
        { codigo: "150811", nombre: "SAYAN" },
        { codigo: "150812", nombre: "VEGUETA" }
    ],
    "1509": [ // distritos de OYON
        { codigo: "150901", nombre: "OYON" },
        { codigo: "150902", nombre: "ANDAJES" },
        { codigo: "150903", nombre: "CAUJUL" },
        { codigo: "150904", nombre: "COCHAMARCA" },
        { codigo: "150905", nombre: "NAVAN" },
        { codigo: "150906", nombre: "PACHANGARA" }
    ],
    "1510": [ // distritos de YAUYOS
        { codigo: "151001", nombre: "YAUYOS" },
        { codigo: "151002", nombre: "ALIS" },
        { codigo: "151003", nombre: "ALLAUCA" },
        { codigo: "151004", nombre: "AYAVIRI" },
        { codigo: "151005", nombre: "AZANGARO" },
        { codigo: "151006", nombre: "CACRA" },
        { codigo: "151007", nombre: "CARANIA" },
        { codigo: "151008", nombre: "CATAHUASI" },
        { codigo: "151009", nombre: "CHOCOS" },
        { codigo: "151010", nombre: "COCHAS" },
        { codigo: "151011", nombre: "COLONIA" },
        { codigo: "151012", nombre: "HONGOS" },
        { codigo: "151013", nombre: "HUAMPARA" },
        { codigo: "151014", nombre: "HUANCAYA" },
        { codigo: "151015", nombre: "HUANGASCAR" },
        { codigo: "151016", nombre: "HUANTAN" },
        { codigo: "151017", nombre: "HUAÑEC" },
        { codigo: "151018", nombre: "LARAOS" },
        { codigo: "151019", nombre: "LINCHA" },
        { codigo: "151020", nombre: "MADEAN" },
        { codigo: "151021", nombre: "MIRAFLORES" },
        { codigo: "151022", nombre: "OMAS" },
        { codigo: "151023", nombre: "PUTINZA" },
        { codigo: "151024", nombre: "QUINCHES" },
        { codigo: "151025", nombre: "QUINOCAY" },
        { codigo: "151026", nombre: "SAN JOAQUIN" },
        { codigo: "151027", nombre: "SAN PEDRO DE PILAS" },
        { codigo: "151028", nombre: "TANTA" },
        { codigo: "151029", nombre: "TAURIPAMPA" },
        { codigo: "151030", nombre: "TOMAS" },
        { codigo: "151031", nombre: "TUPE" },
        { codigo: "151032", nombre: "VIÑAC" },
        { codigo: "151033", nombre: "VITIS" }
    ],
    "0101": [
        { codigo: "010101", nombre: "CHACHAPOYAS" },
        { codigo: "010102", nombre: "ASUNCION" },
        { codigo: "010103", nombre: "BALSAS" },
        { codigo: "010104", nombre: "CHETO" },
        { codigo: "010105", nombre: "CHILIQUIN" },
        { codigo: "010106", nombre: "CHUQUIBAMBA" },
        { codigo: "010107", nombre: "GRANADA" },
        { codigo: "010108", nombre: "HUANCAS" },
        { codigo: "010109", nombre: "LA JALCA" },
        { codigo: "010110", nombre: "LEIMEBAMBA" },
        { codigo: "010111", nombre: "LEVANTO" },
        { codigo: "010112", nombre: "MAGDALENA" },
        { codigo: "010113", nombre: "MARISCAL CASTILLA" },
        { codigo: "010114", nombre: "MOLINOPAMPA" },
        { codigo: "010115", nombre: "MONTEVIDEO" },
        { codigo: "010116", nombre: "OLLEROS" },
        { codigo: "010117", nombre: "QUINJALCA" },
        { codigo: "010118", nombre: "SAN FRANCISCO DE DAGUAS" },
        { codigo: "010119", nombre: "SAN ISIDRO DE MAINO" },
        { codigo: "010120", nombre: "SOLOCO" },
        { codigo: "010121", nombre: "SONCHE" }
    ],
    "0201": [
        { codigo: "020101", nombre: "HUARAZ" },
        { codigo: "020102", nombre: "COCHABAMBA" },
        { codigo: "020103", nombre: "COLCABAMBA" },
        { codigo: "020104", nombre: "HUANCHAY" },
        { codigo: "020105", nombre: "INDEPENDENCIA" },
        { codigo: "020106", nombre: "JANGAS" },
        { codigo: "020107", nombre: "LA LIBERTAD" },
        { codigo: "020108", nombre: "OLLEROS" },
        { codigo: "020109", nombre: "PAMPAS" },
        { codigo: "020110", nombre: "PARIACOTO" },
        { codigo: "020111", nombre: "PIRA" },
        { codigo: "020112", nombre: "TARICA" }
    ],
    "0202": [ // AIJA
        { codigo: "020201", nombre: "AIJA" },
        { codigo: "020202", nombre: "CORIS" },
        { codigo: "020203", nombre: "HUACLLAN" },
        { codigo: "020204", nombre: "LA MERCED" },
        { codigo: "020205", nombre: "SUCCHA" }
    ],
    "0203": [ // ANTONIO RAYMONDI
        { codigo: "020301", nombre: "LLAMELLIN" },
        { codigo: "020302", nombre: "ACZO" },
        { codigo: "020303", nombre: "CHACCHO" },
        { codigo: "020304", nombre: "CHINGAS" },
        { codigo: "020305", nombre: "MIRGAS" },
        { codigo: "020306", nombre: "SAN JUAN DE RONTOY" }
    ],
    "0204": [ // ASUNCION
        { codigo: "020401", nombre: "CHACAS" },
        { codigo: "020402", nombre: "ACOCHACA" }
    ],
    "0205": [ // BOLOGNESI
        { codigo: "020501", nombre: "CHIQUIAN" },
        { codigo: "020502", nombre: "ABELARDO PARDO LEZAMETA" },
        { codigo: "020503", nombre: "ANTONIO RAYMONDI" },
        { codigo: "020504", nombre: "AQUIA" },
        { codigo: "020505", nombre: "CAJACAY" },
        { codigo: "020506", nombre: "CANIS" },
        { codigo: "020507", nombre: "COLQUIOC" },
        { codigo: "020508", nombre: "HUALLANCA" },
        { codigo: "020509", nombre: "HUASTA" },
        { codigo: "020510", nombre: "HUAYLLACAYAN" },
        { codigo: "020511", nombre: "LA PRIMAVERA" },
        { codigo: "020512", nombre: "MANGAS" },
        { codigo: "020513", nombre: "PACLLON" },
        { codigo: "020514", nombre: "SAN MIGUEL DE CORPANQUI" },
        { codigo: "020515", nombre: "TICLLOS" }
    ],
    "0206": [ // CARHUAZ
        { codigo: "020601", nombre: "CARHUAZ" },
        { codigo: "020602", nombre: "ACOPAMPA" },
        { codigo: "020603", nombre: "AMASHCA" },
        { codigo: "020604", nombre: "ANTA" },
        { codigo: "020605", nombre: "ATAQUERO" },
        { codigo: "020606", nombre: "MARCARA" },
        { codigo: "020607", nombre: "PARIAHUANCA" },
        { codigo: "020608", nombre: "SAN MIGUEL DE ACO" },
        { codigo: "020609", nombre: "SHILLA" },
        { codigo: "020610", nombre: "TINCO" },
        { codigo: "020611", nombre: "YUNGAR" }
    ],
    "0207": [ // CARLOS FERMIN FITZCARRALD
        { codigo: "020701", nombre: "SAN LUIS" },
        { codigo: "020702", nombre: "SAN NICOLAS" },
        { codigo: "020703", nombre: "YAUYA" }
    ],
    "0208": [ // CASMA
        { codigo: "020801", nombre: "CASMA" },
        { codigo: "020802", nombre: "BUENA VISTA ALTA" },
        { codigo: "020803", nombre: "COMANDANTE NOEL" },
        { codigo: "020804", nombre: "YAUTAN" }
    ],
    "0209": [ // CORONGO
        { codigo: "020901", nombre: "CORONGO" },
        { codigo: "020902", nombre: "ACO" },
        { codigo: "020903", nombre: "BAMBAS" },
        { codigo: "020904", nombre: "CUSCA" },
        { codigo: "020905", nombre: "LA PAMPA" },
        { codigo: "020906", nombre: "YANAC" },
        { codigo: "020907", nombre: "YUPAN" }
    ],
    "0210": [ // HUARI
        { codigo: "021001", nombre: "HUARI" },
        { codigo: "021002", nombre: "ANRA" },
        { codigo: "021003", nombre: "CAJAY" },
        { codigo: "021004", nombre: "CHAVIN DE HUANTAR" },
        { codigo: "021005", nombre: "HUACACHI" },
        { codigo: "021006", nombre: "HUACCHIS" },
        { codigo: "021007", nombre: "HUACHIS" },
        { codigo: "021008", nombre: "HUANTAR" },
        { codigo: "021009", nombre: "MASIN" },
        { codigo: "021010", nombre: "PAUCAS" },
        { codigo: "021011", nombre: "PONTO" },
        { codigo: "021012", nombre: "RAHUAPAMPA" },
        { codigo: "021013", nombre: "RAPAYAN" },
        { codigo: "021014", nombre: "SAN MARCOS" },
        { codigo: "021015", nombre: "SAN PEDRO DE CHANA" },
        { codigo: "021016", nombre: "UCO" }
    ],
    "0211": [ // HUARMEY
        { codigo: "021101", nombre: "HUARMEY" },
        { codigo: "021102", nombre: "COCHAPETI" },
        { codigo: "021103", nombre: "CULEBRAS" },
        { codigo: "021104", nombre: "HUAYAN" },
        { codigo: "021105", nombre: "MALVAS" }
    ],
    "0212": [ // HUAYLAS
        { codigo: "021201", nombre: "CARAZ" },
        { codigo: "021202", nombre: "HUALLANCA" },
        { codigo: "021203", nombre: "HUATA" },
        { codigo: "021204", nombre: "HUAYLAS" },
        { codigo: "021205", nombre: "MATO" },
        { codigo: "021206", nombre: "PAMPAROMAS" },
        { codigo: "021207", nombre: "PUEBLO LIBRE" },
        { codigo: "021208", nombre: "SANTA CRUZ" },
        { codigo: "021209", nombre: "SANTO TORIBIO" },
        { codigo: "021210", nombre: "YURACMARCA" }
    ],
    "0213": [ // MARISCAL LUZURIAGA
        { codigo: "021301", nombre: "PISCOBAMBA" },
        { codigo: "021302", nombre: "CASCA" },
        { codigo: "021303", nombre: "ELEAZAR GUZMAN BARRON" },
        { codigo: "021304", nombre: "FIDEL OLIVAS ESCUDERO" },
        { codigo: "021305", nombre: "LLAMA" },
        { codigo: "021306", nombre: "LLUMPA" },
        { codigo: "021307", nombre: "LUCMA" },
        { codigo: "021308", nombre: "MUSGA" }
    ],
    "0214": [ // OCROS
        { codigo: "021401", nombre: "OCROS" },
        { codigo: "021402", nombre: "ACAS" },
        { codigo: "021403", nombre: "CAJAMARQUILLA" },
        { codigo: "021404", nombre: "CARHUAPAMPA" },
        { codigo: "021405", nombre: "COCHAS" },
        { codigo: "021406", nombre: "CONGAS" },
        { codigo: "021407", nombre: "LLIPA" },
        { codigo: "021408", nombre: "SAN CRISTOBAL DE RAJAN" },
        { codigo: "021409", nombre: "SAN PEDRO" },
        { codigo: "021410", nombre: "SANTIAGO DE CHILCAS" }
    ],
    "0215": [ // PALLASCA
        { codigo: "021501", nombre: "CABANA" },
        { codigo: "021502", nombre: "BOLOGNESI" },
        { codigo: "021503", nombre: "CONCHUCOS" },
        { codigo: "021504", nombre: "HUACASCHUQUE" },
        { codigo: "021505", nombre: "HUANDOVAL" },
        { codigo: "021506", nombre: "LACABAMBA" },
        { codigo: "021507", nombre: "LLAPO" },
        { codigo: "021508", nombre: "PALLASCA" },
        { codigo: "021509", nombre: "PAMPAS" },
        { codigo: "021510", nombre: "SANTA ROSA" },
        { codigo: "021511", nombre: "TAUCA" }
    ],
    "0216": [ // POMABAMBA
        { codigo: "021601", nombre: "POMABAMBA" },
        { codigo: "021602", nombre: "HUAYLLAN" },
        { codigo: "021603", nombre: "PAROBAMBA" },
        { codigo: "021604", nombre: "QUINUABAMBA" }
    ],
    "0217": [ // RECUAY
        { codigo: "021701", nombre: "RECUAY" },
        { codigo: "021702", nombre: "CATAC" },
        { codigo: "021703", nombre: "COTAPARACO" },
        { codigo: "021704", nombre: "HUAYLLAPAMPA" },
        { codigo: "021705", nombre: "LLACLLIN" },
        { codigo: "021706", nombre: "MARCA" },
        { codigo: "021707", nombre: "PAMPAS CHICO" },
        { codigo: "021708", nombre: "PARARIN" },
        { codigo: "021709", nombre: "TAPACOCHA" },
        { codigo: "021710", nombre: "TICAPAMPA" }
    ],
    "0218": [ // SANTA
        { codigo: "021801", nombre: "CHIMBOTE" },
        { codigo: "021802", nombre: "CACERES DEL PERU" },
        { codigo: "021803", nombre: "COISHCO" },
        { codigo: "021804", nombre: "MACATE" },
        { codigo: "021805", nombre: "MORO" },
        { codigo: "021806", nombre: "NEPEÑA" },
        { codigo: "021807", nombre: "SAMANCO" },
        { codigo: "021808", nombre: "SANTA" },
        { codigo: "021809", nombre: "NUEVO CHIMBOTE" }
    ],
    "0219": [ // SIHUAS
        { codigo: "021901", nombre: "SIHUAS" },
        { codigo: "021902", nombre: "ACOBAMBA" },
        { codigo: "021903", nombre: "ALFONSO UGARTE" },
        { codigo: "021904", nombre: "CASHAPAMPA" },
        { codigo: "021905", nombre: "CHINGALPO" },
        { codigo: "021906", nombre: "HUAYLLABAMBA" },
        { codigo: "021907", nombre: "QUICHES" },
        { codigo: "021908", nombre: "RAGASH" },
        { codigo: "021909", nombre: "SAN JUAN" },
        { codigo: "021910", nombre: "SICSIBAMBA" }
    ],
    "0220": [ // YUNGAY
        { codigo: "022001", nombre: "YUNGAY" },
        { codigo: "022002", nombre: "CASCAPARA" },
        { codigo: "022003", nombre: "MANCOS" },
        { codigo: "022004", nombre: "MATACOTO" },
        { codigo: "022005", nombre: "QUILLO" },
        { codigo: "022006", nombre: "RANRAHIRCA" },
        { codigo: "022007", nombre: "SHUPLUY" },
        { codigo: "022008", nombre: "YANAMA" }
    ],
    "0301": [ //abancay
        { codigo: "030101", nombre: "ABANCAY" },
        { codigo: "030102", nombre: "CHACOCHE" },
        { codigo: "030103", nombre: "CIRCA" },
        { codigo: "030104", nombre: "CURAHUASI" },
        { codigo: "030105", nombre: "HUANIPACA" },
        { codigo: "030106", nombre: "LAMBRAMA" },
        { codigo: "030107", nombre: "PICHIRHUA" },
        { codigo: "030108", nombre: "SAN PEDRO DE CACHORA" },
        { codigo: "030109", nombre: "TAMBURCO" }
    ],
    "0302": [ //andahuylas
        { codigo: "030201", nombre: "ANDAHUAYLAS" },
        { codigo: "030202", nombre: "ANDARAPA" },
        { codigo: "030203", nombre: "CHIARA" },
        { codigo: "030204", nombre: "HUANCARAMA" },
        { codigo: "030205", nombre: "HUANCARAY" },
        { codigo: "030206", nombre: "HUAYANA" },
        { codigo: "030207", nombre: "KISHUARA" },
        { codigo: "030208", nombre: "PACOBAMBA" },
        { codigo: "030209", nombre: "PACUCHA" },
        { codigo: "030210", nombre: "PAMPACHIRI" },
        { codigo: "030211", nombre: "POMACOCHA" },
        { codigo: "030212", nombre: "SAN ANTONIO DE CACHI" },
        { codigo: "030213", nombre: "SAN JERÓNIMO" },
        { codigo: "030214", nombre: "SAN MIGUEL DE CHACCRAMPA" },
        { codigo: "030215", nombre: "SANTA MARÍA DE CHICMO" },
        { codigo: "030216", nombre: "TALAVERA" },
        { codigo: "030217", nombre: "TUMAY HUARACA" },
        { codigo: "030218", nombre: "TURPO" },
        { codigo: "030219", nombre: "KAQUIABAMBA" }
    ],
    "0303": [
        { codigo: "030301", nombre: "ANTABAMBA" },
        { codigo: "030302", nombre: "EL ORO" },
        { codigo: "030303", nombre: "HUAQUIRCA" },
        { codigo: "030304", nombre: "JUAN ESPINOZA MEDRANO" },
        { codigo: "030305", nombre: "OROPESA" },
        { codigo: "030306", nombre: "PACHACONAS" },
        { codigo: "030307", nombre: "SABAINO" }
    ],
    "0304": [ // AYMARAES
        { codigo: "030401", nombre: "CHALHUANCA" },
        { codigo: "030402", nombre: "CAPAYA" },
        { codigo: "030403", nombre: "CARAYBAMBA" },
        { codigo: "030404", nombre: "CHAPIMARCA" },
        { codigo: "030405", nombre: "COLCABAMBA" },
        { codigo: "030406", nombre: "COTARUSE" },
        { codigo: "030407", nombre: "HUAYLLO" },
        { codigo: "030408", nombre: "JUSTO APU SAHUARAURA" },
        { codigo: "030409", nombre: "LUCRE" },
        { codigo: "030410", nombre: "POCOHUANCA" },
        { codigo: "030411", nombre: "SAN JUAN DE CHACÑA" },
        { codigo: "030412", nombre: "SAÑAYCA" },
        { codigo: "030413", nombre: "SORAYA" },
        { codigo: "030414", nombre: "TAPAIRIHUA" },
        { codigo: "030415", nombre: "TINTAY" },
        { codigo: "030416", nombre: "TORAYA" },
        { codigo: "030417", nombre: "YANACA" }
    ],
    "0305": [ // COTABAMBAS
        { codigo: "030501", nombre: "TAMBOBAMBA" },
        { codigo: "030502", nombre: "COTABAMBAS" },
        { codigo: "030503", nombre: "COYLLURQUI" },
        { codigo: "030504", nombre: "HAQUIRA" },
        { codigo: "030505", nombre: "MARA" },
        { codigo: "030506", nombre: "CHALLHUAHUACHO" }
    ],
    "0306": [ // CHINCHEROS
        { codigo: "030601", nombre: "CHINCHEROS" },
        { codigo: "030602", nombre: "ANCO_HUALLO" },
        { codigo: "030603", nombre: "COCHARCAS" },
        { codigo: "030604", nombre: "HUACCANA" },
        { codigo: "030605", nombre: "OCOBAMBA" },
        { codigo: "030606", nombre: "ONGOY" },
        { codigo: "030607", nombre: "URANMARCA" },
        { codigo: "030608", nombre: "RANRACANCHA" }
    ],
    "0307": [ // GRAU
        { codigo: "030701", nombre: "CHUQUIBAMBILLA" },
        { codigo: "030702", nombre: "CURPAHUASI" },
        { codigo: "030703", nombre: "GAMARRA" },
        { codigo: "030704", nombre: "HUAYLLATI" },
        { codigo: "030705", nombre: "MAMARA" },
        { codigo: "030706", nombre: "MICAELA BASTIDAS" },
        { codigo: "030707", nombre: "PATAYPAMPA" },
        { codigo: "030708", nombre: "PROGRESO" },
        { codigo: "030709", nombre: "SAN ANTONIO" },
        { codigo: "030710", nombre: "SANTA ROSA" },
        { codigo: "030711", nombre: "TURPAY" },
        { codigo: "030712", nombre: "VILCABAMBA" },
        { codigo: "030713", nombre: "VIRUNDO" },
        { codigo: "030714", nombre: "CURASCO" }
    ]
};

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', function () {
    inicializarFormulario();
    inicializarEventos();
});

function inicializarEventos() {
    // Evento para tipo de persona (solo si existe)
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    if (ddlTipoPersona) {
        ddlTipoPersona.addEventListener('change', function () {
            cambiarTipoPersona(this.value);
        });
    }

    // Evento para forma de entrega
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    if (ddlFormaEntrega) {
        ddlFormaEntrega.addEventListener('change', function () {
            toggleOtrosEntrega(this.value);
        });
    }

    // Evento para forma de notificación
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    if (ddlFormaNotificacion) {
        ddlFormaNotificacion.addEventListener('change', function () {
            toggleOtrosNotificacion(this.value);
        });
    }

    // Evento para grupo étnico
    const vGrupoEtnico = document.getElementById('vGrupoEtnico');
    if (vGrupoEtnico) {
        vGrupoEtnico.addEventListener('change', function () {
            toggleOtrosGrupoEtnico(this.value);
        });
    }

    // Evento para lengua materna
    const vLenguaMaterna = document.getElementById('vLenguaMaterna');
    if (vLenguaMaterna) {
        vLenguaMaterna.addEventListener('change', function () {
            toggleOtrosLenguaMaterna(this.value);
        });
    }

    // Evento para discapacidad
    const cDiscapacidad = document.getElementById('cDiscapacidad');
    if (cDiscapacidad) {
        cDiscapacidad.addEventListener('change', function () {
            document.getElementById('valorDiscapacidad').value = this.checked ? '1' : '0';
        });
    }

    // Eventos para menor de edad (solo si existen)
    const radioMenorSi = document.getElementById('radioMenorSi');
    const radioMenorNo = document.getElementById('radioMenorNo');

    if (radioMenorSi) {
        radioMenorSi.addEventListener('change', function () {
            if (this.checked) {
                toggleCamposMenorEdad(true);
            }
        });
    }

    if (radioMenorNo) {
        radioMenorNo.addEventListener('change', function () {
            if (this.checked) {
                toggleCamposMenorEdad(false);
            }
        });
    }

    // Evento para el botón de enviar
    const btnGrabar = document.getElementById('btngrabar');
    if (btnGrabar) {
        btnGrabar.addEventListener('click', function () {
            enviarSolicitud();
        });
    }
    inicializarConsultaRUC(); // ← Agrega esta línea
}

// Agregar esta función al inicio del archivo script.js (después de las constantes)
class GeneradorNumerosExpediente {
    constructor() {
        this.claveStorage = 'ultimoNumeroExpediente';
        this.obtenerNumeroActual();
    }

    obtenerNumeroActual() {
        const numeroGuardado = localStorage.getItem(this.claveStorage);
        if (numeroGuardado) {
            this.contador = parseInt(numeroGuardado);
        } else {
            // Iniciar desde 214636 para que el primero sea 214637
            this.contador = 214636;
            this.guardarNumeroActual();
        }
    }

    generarSiguienteNumero() {
        this.contador++;
        this.guardarNumeroActual();
        return this.contador.toString().padStart(7, '0');
    }

    guardarNumeroActual() {
        localStorage.setItem(this.claveStorage, this.contador.toString());
    }

    obtenerNumeroFormateado() {
        const añoActual = new Date().getFullYear();
        const numeroSecuencial = this.generarSiguienteNumero();
        return `${añoActual}-${numeroSecuencial}`;
    }
}

// Crear instancia global del generador
const generadorExpediente = new GeneradorNumerosExpediente();


function inicializarFormulario() {
    // Inicializar contadores de caracteres
    actualizarContador('txtDescripcion', 'lblContador', 499);
    actualizarContador('txtBusquedaInfo', 'lblContador2', 99);

    // Inicializar tipos de documento
    inicializarTiposDocumento();

    // Configurar eventos para los campos de texto
    document.getElementById('txtDescripcion').addEventListener('input', function () {
        actualizarContador('txtDescripcion', 'lblContador', 499);
    });

    document.getElementById('txtBusquedaInfo').addEventListener('input', function () {
        actualizarContador('txtBusquedaInfo', 'lblContador2', 99);
    });
}


// Inicializar eventos RUC
function inicializarConsultaRUC() {
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    if (ddlTipoDocumento) {
        ddlTipoDocumento.addEventListener('change', function () {
            toggleBotonBuscarRUC(this.value);
        });
    }

    // Inicializar estado del botón
    toggleBotonBuscarRUC(document.getElementById('ddlTipoDocumento').value);
}

// Mostrar/ocultar botón buscar
function toggleBotonBuscarRUC(tipoDocumento) {
    const btnBuscarRUC = document.getElementById('btnBuscarRUC');
    const btnBuscarDNI = document.getElementById('btnBuscarDNI');


    if (btnBuscarRUC) {
        btnBuscarRUC.style.display = tipoDocumento === '6' ? 'inline-block' : 'none';
    }

    if (btnBuscarDNI) {
        btnBuscarDNI.style.display = tipoDocumento === '1' ? 'inline-block' : 'none';
    }
}


// Consultar RUC
// async function consultarRUC() {
//     const ruc = document.getElementById('txtNumDoc').value.trim();
//     const txtRazonSocial = document.getElementById('txtRazonSocial');

//     if (!ruc || ruc.length !== 11 || !/^\d+$/.test(ruc)) {
//         alert('Ingrese un RUC válido de 11 dígitos');
//         return;
//     }

//     const btnBuscarRUC = document.getElementById('btnBuscarRUC');
//     const originalText = btnBuscarRUC.innerHTML;
//     btnBuscarRUC.innerHTML = 'Buscando...';
//     btnBuscarRUC.disabled = true;

//     try {
//         const response = await fetch(`consulta_ruc.php?ruc=${ruc}`);

//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data && data.razon_social) {
//             txtRazonSocial.value = data.razon_social;
//         } else {
//             alert('RUC no encontrado');
//             txtRazonSocial.value = '';
//         }

//     } catch (error) {
//         alert('Error al consultar RUC: ' + error.message);
//         console.error('Error:', error);
//     } finally {
//         btnBuscarRUC.innerHTML = originalText;
//         btnBuscarRUC.disabled = false;
//     }
// }

function toggleCamposMenorEdad(esMenor) {
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    const txtNumDoc = document.getElementById('txtNumDoc');

    if (!ddlTipoDocumento || !txtNumDoc) return;

    if (esMenor) {
        // Si es menor de edad, deshabilitar y limpiar campos
        ddlTipoDocumento.disabled = true;
        txtNumDoc.disabled = true;

        // Establecer valores por defecto para menores
        ddlTipoDocumento.value = '1'; // DNI
        txtNumDoc.value = '';

        // Agregar estilos visuales para indicar que está deshabilitado
        ddlTipoDocumento.style.backgroundColor = '#f8f9fa';
        ddlTipoDocumento.style.color = '#6c757d';
        txtNumDoc.style.backgroundColor = '#f8f9fa';
        txtNumDoc.style.color = '#6c757d';

        // Limpiar errores de validación de estos campos
        ocultarError('divTipoDocumento');
        ocultarError('divNumDoc');

        // Mostrar mensaje informativo
        mostrarMensajeMenorEdad();
    } else {
        // Si no es menor de edad, habilitar campos
        ddlTipoDocumento.disabled = false;
        txtNumDoc.disabled = false;

        // Restaurar estilos normales
        ddlTipoDocumento.style.backgroundColor = '';
        ddlTipoDocumento.style.color = '';
        txtNumDoc.style.backgroundColor = '';
        txtNumDoc.style.color = '';

        // Ocultar mensaje informativo
        ocultarMensajeMenorEdad();
    }
}

function mostrarMensajeMenorEdad() {
    // Crear o mostrar mensaje informativo
    let mensajeDiv = document.getElementById('mensajeMenorEdad');
    if (!mensajeDiv) {
        mensajeDiv = document.createElement('div');
        mensajeDiv.id = 'mensajeMenorEdad';
        mensajeDiv.style.cssText = 'color: #856404; background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 12px;';
        mensajeDiv.innerHTML = '<strong>Información:</strong> Para menores de edad, los datos del documento de identidad deben ser proporcionados por el representante legal.';

        // Insertar después del campo de número de documento
        const divNumDoc = document.getElementById('divNumDoc');
        divNumDoc.parentNode.insertBefore(mensajeDiv, divNumDoc.nextSibling);
    } else {
        mensajeDiv.style.display = 'block';
    }
}

function ocultarMensajeMenorEdad() {
    const mensajeDiv = document.getElementById('mensajeMenorEdad');
    if (mensajeDiv) {
        mensajeDiv.style.display = 'none';
    }
}



function inicializarTiposDocumento(tipoPersona = null) {
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');

    // Determinar qué opciones mostrar según el tipo de persona
    let tiposDocumento;
    if (tipoPersona === '2') { // Persona jurídica
        tiposDocumento = [
            { value: "6", text: "REGISTRO UNICO DE CONTRIBUYENTES" },
            //{ value: "0", text: "OTROS" }
        ];
    } else { // Persona natural o por defecto
        tiposDocumento = [
            { value: "1", text: "DOCUMENTO NACIONAL DE IDENTIDAD" },
            { value: "4", text: "CARNET DE EXTRANJERIA" },
            { value: "7", text: "PASAPORTE" }
            //{ value: "A", text: "CEDULA DIPLOMATICA DE IDENTIDAD" },
            //{ value: "0", text: "OTROS" }
        ];
    }

    // Limpiar opciones existentes excepto la primera
    while (ddlTipoDocumento.options.length > 1) {
        ddlTipoDocumento.remove(1);
    }

    // Agregar opciones
    tiposDocumento.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.value;
        option.text = tipo.text;
        ddlTipoDocumento.add(option);
    });
}


function cambiarTipoPersona(tipoPersona) {
    const divPersonaNatural = document.getElementById('divPersonaNatural');
    const divPersonaJuridica = document.getElementById('divPersonaJuridica');
    const divCajaMenor = document.getElementById('divCajaMenor');
    const ocultarPersonaJuridica = document.getElementById('ocultarPersonaJuridica');

    document.getElementById('textTipoPersona').value = tipoPersona;

    // Actualizar tipos de documento según el tipo de persona
    inicializarTiposDocumento(tipoPersona);

    if (tipoPersona === '1') { // Persona natural
        divPersonaNatural.style.display = 'block';
        divPersonaJuridica.style.display = 'none';
        divCajaMenor.style.display = 'block';
        ocultarPersonaJuridica.style.display = 'block';
        document.getElementById('divBotonValidarReniec').style.display = 'block';

        //habiliater campos de nombre al cambiar a persona natural
        const txtApePat = document.getElementById('txtApePat');
        const txtApeMat = document.getElementById('txtApeMat');
        const txtNombre = document.getElementById('txtNombre');

        txtApePat.readOnly = false;
        txtApeMat.readOnly = false;
        txtNombre.readOnly = false;

        txtApePat.style.cursor = "";
        txtApeMat.style.cursor = "";
        txtNombre.style.cursor = "";

    } else if (tipoPersona === '2') { // Persona jurídica
        divPersonaNatural.style.display = 'none';
        divPersonaJuridica.style.display = 'block';
        divCajaMenor.style.display = 'none';
        ocultarPersonaJuridica.style.display = 'none';
        document.getElementById('divBotonValidarReniec').style.display = 'none';
    } else {
        divPersonaNatural.style.display = 'none';
        divPersonaJuridica.style.display = 'none';
        divCajaMenor.style.display = 'none';
        ocultarPersonaJuridica.style.display = 'none';
        document.getElementById('divBotonValidarReniec').style.display = 'none';
    }
}

function changeDepartamento() {
    const ddlDepartamento = document.getElementById('ddlDepartamento');
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');

    const departamentoCodigo = ddlDepartamento.value;
    document.getElementById('textTipoDepartamento').value = ddlDepartamento.options[ddlDepartamento.selectedIndex].text;

    // Limpiar provincias y distritos
    ddlProvincia.innerHTML = '<option value="-">-- SELECCIONAR --</option>';
    ddlDistrito.innerHTML = '<option value="-">-- SELECCIONAR --</option>';

    if (departamentoCodigo !== '-' && provinciasData[departamentoCodigo]) {
        provinciasData[departamentoCodigo].forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia.codigo;
            option.text = provincia.nombre;
            ddlProvincia.add(option);
        });
    }
}

function changeProvincia() {
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');

    const provinciaCodigo = ddlProvincia.value;
    document.getElementById('textTipoProvincia').value = ddlProvincia.options[ddlProvincia.selectedIndex].text;

    // Limpiar distritos
    ddlDistrito.innerHTML = '<option value="-">-- SELECCIONAR --</option>';

    if (provinciaCodigo !== '-' && distritosData[provinciaCodigo]) {
        distritosData[provinciaCodigo].forEach(distrito => {
            const option = document.createElement('option');
            option.value = distrito.codigo;
            option.text = distrito.nombre;
            ddlDistrito.add(option);
        });
    }
}

function changeDistrito() {
    const ddlDistrito = document.getElementById('ddlDistrito');
    document.getElementById('textTipoDistrito').value = ddlDistrito.options[ddlDistrito.selectedIndex].text;
}

function toggleOtrosEntrega(valor) {
    const divSelectorOtrosEntrega = document.getElementById('divSelectorOtrosEntrega');
    document.getElementById('textFormaEntrega').value = document.getElementById('ddlFormaEntrega').options[document.getElementById('ddlFormaEntrega').selectedIndex].text;

    if (valor === '8') { // OTROS
        divSelectorOtrosEntrega.style.display = 'block';
    } else {
        divSelectorOtrosEntrega.style.display = 'none';
        // Limpiar el campo cuando se cambia de opción
        document.getElementById('vOtrosEntrega').value = '';
    }
}

function toggleOtrosNotificacion(valor) {
    const divSelectorOtrosNotificacion = document.getElementById('divSelectorOtrosNotificacion');
    document.getElementById('textFormaNotificacion').value = document.getElementById('ddlFormaNotificacion').options[document.getElementById('ddlFormaNotificacion').selectedIndex].text;

    if (valor === '4') { // OTROS
        divSelectorOtrosNotificacion.style.display = 'block';
    } else {
        divSelectorOtrosNotificacion.style.display = 'none';
    }
}

function validateAge(input) {
    var value = input.value.trim();
    var radioSi = document.getElementById('radioMenorSi');
    var radioNo = document.getElementById('radioMenorNo');

    // Si el campo está vacío, permitir pasar sin validación
    if (value === "") {
        return true;
    }

    // Verificar si alguno de los radio buttons está seleccionado
    if (!radioSi.checked && !radioNo.checked) {
        return true;
    }

    // Convertir el valor a número
    value = parseInt(value);

    // Determinar min y max según el radio button seleccionado
    var min, max;
    if (radioSi.checked) {
        min = 1;
        max = 17;
    } else {
        min = 18;
        max = 100;
    }

    // Validar la edad si se ha ingresado un número
    if (isNaN(value) || value < min || value > max) {
        input.focus();

        // Mostrar popup inmediatamente
        if (radioSi.checked) {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: 'Por favor, ingrese un número entre 1 y 17.',
                confirmButtonText: 'Entendido',
                allowOutsideClick: false
            }).then((result) => {
                // Limpiar el campo después de que el usuario cierre el popup
                if (result.isConfirmed) {
                    input.value = "";
                    input.focus();
                }
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: 'Por favor, ingrese un número entre 18 y 100.',
                confirmButtonText: 'Entendido',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    input.value = "";
                    input.focus();
                }
            });
        }
        return false;
    }

    return true;
}


function revalidateAge() {
    var edadInput = document.getElementById('vEdad');
    if (edadInput && edadInput.value.trim() !== "") {
        // Usar setTimeout para asegurar que la validación ocurra después del cambio
        setTimeout(function () {
            validateAge(edadInput);
        }, 100);
    }
}

function validateAgeImmediately(input) {
    var value = input.value.trim();
    var radioSi = document.getElementById('radioMenorSi');

    // Solo validar si ya tenemos un valor completo y es menor de edad
    if (value !== "" && radioSi && radioSi.checked) {
        var edad = parseInt(value);

        // Si la edad es mayor a 17, mostrar advertencia inmediatamente
        if (!isNaN(edad) && edad > 17) {
            // Usar setTimeout para evitar problemas con el evento oninput
            setTimeout(function () {
                Swal.fire({
                    icon: 'warning',
                    title: 'Edad no válida',
                    text: 'Como es menor de edad, debe ingresar una edad entre 1 y 17 años.',
                    confirmButtonText: 'Entendido',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        input.value = "";
                        input.focus();
                    }
                });
            }, 100);
        }
    }
}


function toggleOtrosGrupoEtnico(valor) {
    const divSelectorOtrosGrupoEtnico = document.getElementById('divSelectorOtrosGrupoEtnico');

    if (valor === '4') { // OTROS
        divSelectorOtrosGrupoEtnico.style.display = 'block';
    } else {
        divSelectorOtrosGrupoEtnico.style.display = 'none';
    }
}

function toggleOtrosLenguaMaterna(valor) {
    const divSelectorOtrosLenguaMaterna = document.getElementById('divSelectorOtrosLenguaMaterna');

    if (valor === '4') { // OTROS
        divSelectorOtrosLenguaMaterna.style.display = 'block';
    } else {
        divSelectorOtrosLenguaMaterna.style.display = 'none';
    }
}

function actualizarContador(textAreaId, labelId, maxLength) {
    const textArea = document.getElementById(textAreaId);
    const label = document.getElementById(labelId);
    const currentLength = textArea.value.length;
    const remaining = maxLength - currentLength;

    label.textContent = remaining;

    if (remaining < 0) {
        label.style.color = 'red';
    } else if (remaining < 50) {
        label.style.color = 'orange';
    } else {
        label.style.color = '#FF3333';
    }
}

function validarFormulario() {
    let esValido = true;
    //const esMenorEdad = document.getElementById('radioMenorSi').checked;
    const esMenorEdad = document.getElementById('radioMenorSi') ? document.getElementById('radioMenorSi').checked : false;

    // Validar tipo de persona
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    if (ddlTipoPersona && ddlTipoPersona.value === '-') {
        mostrarError('divTipoPersona', 'Seleccione el tipo de persona');
        esValido = false;
    } else {
        ocultarError('divTipoPersona');
    }

    // Validar tipo de documento (solo si NO es menor de edad)
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    if (ddlTipoDocumento && !esMenorEdad && ddlTipoDocumento.value === '-') {
        mostrarError('divTipoDocumento', 'Seleccione el tipo de documento');
        esValido = false;
    } else {
        ocultarError('divTipoDocumento');
    }

    // Validar número de documento (solo si NO es menor de edad)
    const txtNumDoc = document.getElementById('txtNumDoc');
    if (txtNumDoc && !esMenorEdad && (!txtNumDoc.value || txtNumDoc.value.trim() === '')) {
        mostrarError('divNumDoc', 'Ingrese el número de documento');
        esValido = false;
    } else {
        ocultarError('divNumDoc');
    }

    // Validar descripción
    const txtDescripcion = document.getElementById('txtDescripcion');
    if (txtDescripcion && (!txtDescripcion.value || txtDescripcion.value.trim() === '' || txtDescripcion.value.length < 15)) {
        mostrarError('divDescripcion', 'La descripción debe tener al menos 15 caracteres');
        esValido = false;
    } else {
        ocultarError('divDescripcion');
    }

    // Validar forma de entrega
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    if (ddlFormaEntrega && ddlFormaEntrega.value === '-') {
        mostrarError('divFormaEntregaRequired', 'Seleccione la forma de entrega');
        esValido = false;
    } else {
        ocultarError('divFormaEntregaRequired');
    }

    // Validar forma de notificación
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    if (ddlFormaNotificacion && ddlFormaNotificacion.value === '-') {
        mostrarError('divFormaNotificacionRequired', 'Seleccione la forma de notificación');
        esValido = false;
    } else {
        ocultarError('divFormaNotificacionRequired');
    }

    //return esValido;

    // Validar edad si es persona natural y se ha seleccionado menor/mayor de edad
    const vEdad = document.getElementById('vEdad');
    const radioMenorSi = document.getElementById('radioMenorSi');
    const radioMenorNo = document.getElementById('radioMenorNo');

    if (document.getElementById('ddlTipoPersona').value === '1' &&
        (radioMenorSi.checked || radioMenorNo.checked) &&
        vEdad && vEdad.value.trim() !== "") {

        if (!validateAge(vEdad)) {
            esValido = false;
        }
    }

    return esValido;
}

function mostrarError(elementId, mensaje) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = '<span style="color: red; font-size: 12px;">' + mensaje + '</span>';
}

function ocultarError(elementId) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = '';
}

function enviarSolicitud() {
    if (!validarFormulario()) {
        alert('Por favor, completar todos los campos obligatorios.');
        return;
    }

    // Mostrar preloader
    document.getElementById('preloader').style.display = 'block';

    // Simular envío (en un caso real aquí iría la llamada al servidor)
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';

        // Generar PDF
        generarPDF();

        // Limpiar formulario después de generar el PDF
        limpiarFormulario();

        alert('Solicitud enviada correctamente. Se ha generado un PDF con los datos.');
    }, 2000);
}

function generarPDF() {
    // En un caso real, aquí se usaría una librería como jsPDF
    // Para este ejemplo, simulamos la generación del PDF
    const datos = recopilarDatosFormulario();

    // En un caso real, aquí se generaría el PDF con los datos
    console.log('Datos para el PDF:', datos);

    // Crear instancia de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuración del logo
    const logoUrl = '/solicitudes/assets/img/logo_mtpe_main.png'; // Ajusta la ruta de tu logo
    const logoWidth = 60;
    const logoHeight = 15;

    // Configurar márgenes y posiciones
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 25;

    // ===== PÁGINA 1 =====
    // Agregar logo en la parte superior izquierda
    try {
        doc.addImage(logoUrl, 'PNG', marginLeft, 15, logoWidth, logoHeight);

        // Texto de la institución al lado del logo
        // doc.setFontSize(10);
        // doc.setFont('helvetica', 'bold');
        // doc.text('PERÚ', marginLeft + logoWidth + 5, 18);
        // doc.setFontSize(9);
        // doc.setFont('helvetica', 'normal');
        // doc.text('Ministerio de Trabajo', marginLeft + logoWidth + 5, 23);
        // doc.text('y Promoción del Empleo', marginLeft + logoWidth + 5, 28);

        yPosition = 50; // Ajustar posición después del encabezado con logo
    } catch (error) {
        console.error('Error al cargar el logo:', error);
        // Si falla el logo, continuar sin él
        yPosition = 30;
    }


    // Encabezado
    // doc.setFontSize(14);
    // doc.setFont('helvetica', 'bold');
    // doc.text('PERÚ', pageWidth / 2, yPosition, { align: 'center' });
    // yPosition += 7;

    // doc.setFontSize(12);
    // doc.text('Ministerio de Trabajo y Promoción del Empleo', pageWidth / 2, yPosition, { align: 'center' });
    // yPosition += 7;

    doc.setFontSize(15);
    doc.setFont('bold');
    doc.text('SOLICITUD DE ACCESO A LA INFORMACIÓN', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;

    // ===== IDENTIFICACIÓN DEL SOLICITANTE =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ IDENTIFICACIÓN DEL SOLICITANTE', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Función para agregar campo con etiqueta y valor
    function agregarCampo(etiqueta, valor, y) {
        doc.setFont('helvetica', 'bold');
        doc.text(etiqueta + ':', marginLeft, y);
        doc.setFont('helvetica', 'normal');
        doc.text(valor || 'No especificado', marginLeft + 60, y);
        return y + 6;
    }

    // Campos de identificación
    yPosition = agregarCampo('Tipo de persona', datos.tipoPersona, yPosition);
    yPosition = agregarCampo('Tipo de documento', datos.tipoDocumento, yPosition);
    yPosition = agregarCampo('N° de documento', datos.numeroDocumento, yPosition);

    if (datos.tipoPersona === 'NATURAL') {
        yPosition = agregarCampo('Apellido paterno', datos.apellidoPaterno, yPosition);
        yPosition = agregarCampo('Apellido materno', datos.apellidoMaterno, yPosition);
        yPosition = agregarCampo('Nombres', datos.nombres, yPosition);
    } else {
        yPosition = agregarCampo('Razón Social', datos.razonSocial, yPosition);
    }

    yPosition = agregarCampo('Departamento', datos.departamento, yPosition);
    yPosition = agregarCampo('Provincia', datos.provincia, yPosition);
    yPosition = agregarCampo('Distrito', datos.distrito, yPosition);
    yPosition = agregarCampo('Dirección', datos.direccion, yPosition);

    yPosition += 5;

    // ===== DETALLE DE LA SOLICITUD =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ DETALLE DE LA SOLICITUD', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Fecha de solicitud con fecha y hora actual
    const ahora = new Date();
    const fechaHora = ahora.toLocaleDateString('es-PE') + ' ' + ahora.toLocaleTimeString('es-PE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    yPosition = agregarCampo('Fecha de solicitud', fechaHora, yPosition);
    yPosition += 3;

    // Información solicitada con formato específico
    doc.setFont('helvetica', 'bold');
    doc.text('Información solicitada:', marginLeft, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    const descripcionLines = doc.splitTextToSize(datos.descripcion || 'No especificado', pageWidth - marginLeft - marginRight);
    doc.text(descripcionLines, marginLeft, yPosition);
    yPosition += (descripcionLines.length * 5) + 8;

    // Adjunta archivo
    const archivoInput = document.getElementById('file');
    const adjuntaArchivo = archivoInput && archivoInput.files.length > 0 ? 'SI' : 'NO';
    yPosition = agregarCampo('Adjunta archivo', adjuntaArchivo, yPosition);

    // Medio de entrega
    yPosition = agregarCampo('Medio de entrega de información', datos.formaEntrega, yPosition);

    yPosition += 5;

    // ===== REQUISITOS OPCIONALES =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+ REQUISITOS OPCIONALES', marginLeft, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Área que posee la información
    const ddlUnidadOrganica = document.getElementById('ddlUnidadOrganica');
    const areaInfo = ddlUnidadOrganica.options[ddlUnidadOrganica.selectedIndex].text;
    yPosition = agregarCampo('Área que posee la información', areaInfo !== '-- SELECCIONAR --' ? areaInfo : 'No especificado', yPosition);

    // Datos que propicien la localización
    yPosition += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Datos que propicien a la localización o faciliten busqueda:', marginLeft, yPosition);
    yPosition += 4;
    doc.setFont('helvetica', 'normal');
    const busquedaLines = doc.splitTextToSize(datos.busquedaInfo || 'No especificado', pageWidth - marginLeft - marginRight);
    doc.text(busquedaLines, marginLeft, yPosition);
    yPosition += (busquedaLines.length * 5) + 8;

    // Contacto en columna vertical (formato manual)
    doc.setFont('helvetica', 'bold');
    doc.text('Celular:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.celular || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'bold');
    doc.text('Teléfono:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.telefono || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'bold');
    doc.text('Email:', marginLeft, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(datos.email || 'No especificado', marginLeft + 60, yPosition);
    yPosition += 8;


    // Solo mostrar datos adicionales para personas naturales
    if (datos.tipoPersona === 'NATURAL') {
        yPosition = agregarCampo('Sexo', datos.sexo, yPosition);
        yPosition = agregarCampo('Edad', datos.edad, yPosition);
        yPosition = agregarCampo('Grupo étnico', datos.grupoEtnico, yPosition);
        yPosition = agregarCampo('Discapacidad', datos.discapacidad, yPosition);
        yPosition = agregarCampo('Idioma', datos.lenguaMaterna, yPosition);
        yPosition = agregarCampo('Nacionalidad', datos.nacionalidad, yPosition);
        yPosition = agregarCampo('Medio de notificación', datos.formaNotificacion, yPosition);
    }

    // Medio de notificación
    //yPosition += 3;
    //yPosition = agregarCampo('Medio de notificación', datos.formaNotificacion, yPosition);

    // Guardar el PDF
    //     const nombreArchivo = 'solicitud_acceso_informacion_' + (datos.numeroDocumento || 'sin_documento') + '.pdf';
    //     doc.save(nombreArchivo);
    // }
    // Generar número de expediente único
    const numeroExpediente = generadorExpediente.obtenerNumeroFormateado();

    // Guardar el PDF con el nombre en formato: 2025-0214637.pdf
    const nombreArchivo = numeroExpediente + '.pdf';
    doc.save(nombreArchivo);

    // Mostrar el número de expediente al usuario
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Solicitud Registrada',
            html: `Su solicitud ha sido generada correctamente.<br><br>
                    <strong>N° de Expediente:</strong> ${numeroExpediente}<br>
                    <strong>Archivo:</strong> ${nombreArchivo}`,
            confirmButtonText: 'Aceptar'
        });
    }, 500);
}
function recopilarDatosFormulario() {
    const ddlTipoPersona = document.getElementById('ddlTipoPersona');
    const ddlTipoDocumento = document.getElementById('ddlTipoDocumento');
    const ddlDepartamento = document.getElementById('ddlDepartamento');
    const ddlProvincia = document.getElementById('ddlProvincia');
    const ddlDistrito = document.getElementById('ddlDistrito');
    const ddlFormaEntrega = document.getElementById('ddlFormaEntrega');
    const ddlUnidadOrganica = document.getElementById('ddlUnidadOrganica')
    const ddlFormaNotificacion = document.getElementById('ddlFormaNotificacion');
    const vSexo = document.getElementById('vSexo');
    const vGrupoEtnico = document.getElementById('vGrupoEtnico');
    const vLenguaMaterna = document.getElementById('vLenguaMaterna');
    const vNacionalidad = document.getElementById('vNacionalidad');

    const esMenorEdad = document.getElementById('radioMenorSi').checked;

    // Obtener valores con formato adecuado
    const tipoPersona = ddlTipoPersona.options[ddlTipoPersona.selectedIndex].text;
    const tipoDocumento = ddlTipoDocumento.options[ddlTipoDocumento.selectedIndex].text;
    const sexo = vSexo.options[vSexo.selectedIndex].text;
    const grupoEtnico = vGrupoEtnico.options[vGrupoEtnico.selectedIndex].text;
    const lenguaMaterna = vLenguaMaterna.options[vLenguaMaterna.selectedIndex].text;
    const nacionalidad = vNacionalidad.options[vNacionalidad.selectedIndex].text;

    // Formatear valores específicos
    let grupoEtnicoFormateado = grupoEtnico;
    if (grupoEtnico === 'OTROS' && document.getElementById('vOtrosGrupoEtnico').value) {
        grupoEtnicoFormateado = document.getElementById('vOtrosGrupoEtnico').value.toUpperCase();
    }

    let lenguaMaternaFormateada = lenguaMaterna;
    if (lenguaMaterna === 'OTROS' && document.getElementById('vOtrosLenguaMaterna').value) {
        lenguaMaternaFormateada = document.getElementById('vOtrosLenguaMaterna').value.toUpperCase();
    } else if (lenguaMaterna === 'ESPAÑOL') {
        lenguaMaternaFormateada = 'CASTELLANO';
    }

    let sexoFormateado = sexo;
    if (sexo === 'MASCULINO') sexoFormateado = 'HOMBRE';
    if (sexo === 'FEMENINO') sexoFormateado = 'MUJER';

    return {
        tipoPersona: tipoPersona,
        tipoDocumento: tipoDocumento,
        numeroDocumento: document.getElementById('txtNumDoc').value,
        razonSocial: document.getElementById('txtRazonSocial').value,
        apellidoPaterno: document.getElementById('txtApePat').value.toUpperCase(),
        apellidoMaterno: document.getElementById('txtApeMat').value.toUpperCase(),
        nombres: document.getElementById('txtNombre').value.toUpperCase(),
        departamento: ddlDepartamento.options[ddlDepartamento.selectedIndex].text,
        provincia: ddlProvincia.options[ddlProvincia.selectedIndex].text,
        distrito: ddlDistrito.options[ddlDistrito.selectedIndex].text,
        direccion: document.getElementById('txtDomicilio').value.toUpperCase(),
        descripcion: document.getElementById('txtDescripcion').value.toUpperCase(),
        busquedaInfo: document.getElementById('txtBusquedaInfo').value,
        formaEntrega: ddlFormaEntrega.options[ddlFormaEntrega.selectedIndex].text,
        formaNotificacion: ddlFormaNotificacion.options[ddlFormaNotificacion.selectedIndex].text,
        telefono: document.getElementById('txtTelefono').value,
        celular: document.getElementById('txtCelular').value,
        email: document.getElementById('txtEmail').value,
        sexo: sexoFormateado,
        edad: document.getElementById('vEdad').value,
        grupoEtnico: grupoEtnicoFormateado,
        discapacidad: document.getElementById('cDiscapacidad').checked ? 'SI' : 'NO',
        lenguaMaterna: lenguaMaternaFormateada,
        nacionalidad: nacionalidad === 'PERUANA' ? 'PERÚ' : nacionalidad
    };
};

function limpiarFormulario() {
    // Limpiar campos básicos
    document.getElementById('ddlTipoPersona').value = '-';
    document.getElementById('ddlTipoDocumento').value = '-';
    document.getElementById('txtNumDoc').value = '';
    document.getElementById('txtRazonSocial').value = '';
    document.getElementById('txtApePat').value = '';
    document.getElementById('txtApeMat').value = '';
    document.getElementById('txtNombre').value = '';
    document.getElementById('ddlDepartamento').value = '-';
    document.getElementById('ddlProvincia').value = '-';
    document.getElementById('ddlDistrito').value = '-';
    document.getElementById('txtDomicilio').value = '';
    document.getElementById('txtDescripcion').value = '';
    document.getElementById('txtBusquedaInfo').value = '';
    document.getElementById('ddlFormaEntrega').value = '-';
    document.getElementById('ddlUnidadOrganica').value = '-';
    document.getElementById('ddlFormaNotificacion').value = '-';
    document.getElementById('txtTelefono').value = '';
    document.getElementById('txtCelular').value = '';
    document.getElementById('txtEmail').value = '';

    // Limpiar campos de persona natural
    document.getElementById('vSexo').value = '-';
    document.getElementById('vEdad').value = '';
    document.getElementById('vGrupoEtnico').value = '-';
    document.getElementById('cDiscapacidad').checked = false;
    document.getElementById('valorDiscapacidad').value = '0';
    document.getElementById('vLenguaMaterna').value = '-';
    document.getElementById('vNacionalidad').value = '-';

    // Limpiar campos "Otros"
    document.getElementById('vOtrosEntrega').value = '';
    document.getElementById('vOtrosNotificacion').value = '';
    document.getElementById('vOtrosGrupoEtnico').value = '';
    document.getElementById('vOtrosLenguaMaterna').value = '';

    // Limpiar archivo
    document.getElementById('file').value = '';

    // Limpiar unidad orgánica
    document.getElementById('ddlUnidadOrganica').value = '-';

    // Limpiar campos ocultos
    document.getElementById('textTipoPersona').value = '';
    document.getElementById('textTipoDocumento').value = '';
    document.getElementById('textTipoDepartamento').value = '';
    document.getElementById('textTipoProvincia').value = '';
    document.getElementById('textTipoDistrito').value = '';
    document.getElementById('textFormaEntrega').value = '';
    document.getElementById('textFormaNotificacion').value = '';
    document.getElementById('textNacionalidad').value = '';

    // Limpiar menor de edad
    document.querySelectorAll('input[name="vMenor"]').forEach(radio => {
        radio.checked = false;
    });


    // Asegurarse de que los campos de documento estén habilitados
    document.getElementById('ddlTipoDocumento').disabled = false;
    document.getElementById('txtNumDoc').disabled = false;

    // Restaurar estilos
    document.getElementById('ddlTipoDocumento').style.backgroundColor = '';
    document.getElementById('ddlTipoDocumento').style.color = '';
    document.getElementById('txtNumDoc').style.backgroundColor = '';
    document.getElementById('txtNumDoc').style.color = '';

    // Ocultar mensaje informativo
    ocultarMensajeMenorEdad();


    // Ocultar secciones que se mostraron dinámicamente
    document.getElementById('divPersonaNatural').style.display = 'none';
    document.getElementById('divPersonaJuridica').style.display = 'none';
    document.getElementById('divCajaMenor').style.display = 'none';
    document.getElementById('ocultarPersonaJuridica').style.display = 'none';
    document.getElementById('divBotonValidarReniec').style.display = 'none';
    document.getElementById('divSelectorOtrosEntrega').style.display = 'none';
    document.getElementById('divSelectorOtrosNotificacion').style.display = 'none';
    document.getElementById('divSelectorOtrosGrupoEtnico').style.display = 'none';
    document.getElementById('divSelectorOtrosLenguaMaterna').style.display = 'none';

    // Actualizar contadores
    actualizarContador('txtDescripcion', 'lblContador', 499);
    actualizarContador('txtBusquedaInfo', 'lblContador2', 99);

    // Reinicializar tipos de documento
    inicializarTiposDocumento();
}

