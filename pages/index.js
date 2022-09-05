import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Loader from '@/components/Loader';
import styles from '@/styles/Home.module.scss'
import { LocationIcon, HumidityIcon, WindIcon, MinIcon, MaxIcon, FeelsIcon, GpsIcon, GpsSlashIcon, BlockedIcon, LogoIcon } from '@/helper/Icon'
import { ClearSkyDayIcon, ClearSkyNightIcon, FewCloudsDayIcon, FewCloudsNightIcon, ScatteredCloudsDayIcon, ScatteredCloudsNightIcon, BrokenCloudsDayIcon, BrokenCloudsNightIcon, ShowerRainDayIcon, ShowerRainNightIcon, RainDayIcon, RainNightIcon, ThunderstormDayIcon, ThunderstormNightIcon, SnowDayIcon, SnowNightIcon, MistDayIcon, MistNightIcon } from '@/helper/Icon'
import { getWeatherCity, getWeatherLocation } from 'lib/OpenWeather';
import { usePosition } from 'use-position';
import { Cities } from '@/components/cities/Cities';
import Modal from '@/components/Modal';

export default function Home() {

  const [data, setData] = useState()
  const [modal, setModal] = useState(false)
  const { latitude, longitude, error } = usePosition()

  const getDataLocation = () => {
    if (error) {
      alert('Konum erişimini reddettiniz! Mevcut konumunuz bulunamıyor.')
    } else {
      getWeatherLocation(latitude, longitude)
        .then(res => setData(res))
    }
  }

  const getDataCity = (city) => {
    getWeatherCity(city)
      .then(res => setData(res))
  }

  useEffect(() => {
    latitude && longitude && getDataLocation()
  }, [latitude, longitude])

  const getIcon = (code) => {
    switch (code) {
      case '01d':
        return <ClearSkyDayIcon />
        break;
      case '01n':
        return <ClearSkyNightIcon />
        break;
      case '02d':
        return <FewCloudsDayIcon />
        break;
      case '02n':
        return <FewCloudsNightIcon />
        break;
      case '03d':
        return <ScatteredCloudsDayIcon />
        break;
      case '03n':
        return <ScatteredCloudsNightIcon />
        break;
      case '04d':
        return <BrokenCloudsDayIcon />
        break;
      case '04n':
        return <BrokenCloudsNightIcon />
        break;
      case '09d':
        return <ShowerRainDayIcon />
        break;
      case '09n':
        return <ShowerRainNightIcon />
        break;
      case '10d':
        return <RainDayIcon />
        break;
      case '10n':
        return <RainNightIcon />
        break;
      case '11d':
        return <ThunderstormDayIcon />
        break;
      case '11n':
        return <ThunderstormNightIcon />
        break;
      case '13d':
        return <SnowDayIcon />
        break;
      case '131n':
        return <SnowNightIcon />
        break;
      case '50d':
        return <MistDayIcon />
        break;
      case '50n':
        return <MistNightIcon />
        break;

      default:
        return <h6>bug</h6>
        break;
    }
  }

  const cities = [
    {
      "id": 1,
      "name": "Adana",
      "latitude": "37.0000",
      "longitude": "35.3213",
      "population": 2183167,
      "region": "Akdeniz"
    },
    {
      "id": 2,
      "name": "Adıyaman",
      "latitude": "37.7648",
      "longitude": "38.2786",
      "population": 602774,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 3,
      "name": "Afyonkarahisar",
      "latitude": "38.7507",
      "longitude": "30.5567",
      "population": 709015,
      "region": "Ege"
    },
    {
      "id": 4,
      "name": "Ağrı",
      "latitude": "39.7191",
      "longitude": "43.0503",
      "population": 547210,
      "region": "Doğu Anadolu"
    },
    {
      "id": 5,
      "name": "Amasya",
      "latitude": "40.6499",
      "longitude": "35.8353",
      "population": 322167,
      "region": "Karadeniz"
    },
    {
      "id": 6,
      "name": "Ankara",
      "latitude": "39.9208",
      "longitude": "32.8541",
      "population": 5270575,
      "region": "İç Anadolu"
    },
    {
      "id": 7,
      "name": "Antalya",
      "latitude": "36.8841",
      "longitude": "30.7056",
      "population": 2288456,
      "region": "Akdeniz"
    },
    {
      "id": 8,
      "name": "Artvin",
      "latitude": "41.1828",
      "longitude": "41.8183",
      "population": 168370,
      "region": "Karadeniz"
    },
    {
      "id": 9,
      "name": "Aydın",
      "latitude": "37.8560",
      "longitude": "27.8416",
      "population": 1053506,
      "region": "Ege"
    },
    {
      "id": 10,
      "name": "Balıkesir",
      "latitude": "39.6484",
      "longitude": "27.8826",
      "population": 1186688,
      "region": "Ege"
    },
    {
      "id": 11,
      "name": "Bilecik",
      "latitude": "40.0567",
      "longitude": "30.0665",
      "population": 212361,
      "region": "Marmara"
    },
    {
      "id": 12,
      "name": "Bingöl",
      "latitude": "39.0626",
      "longitude": "40.7696",
      "population": 267184,
      "region": "Doğu Anadolu"
    },
    {
      "id": 13,
      "name": "Bitlis",
      "latitude": "38.3938",
      "longitude": "42.1232",
      "population": 267184,
      "region": "Doğu Anadolu"
    },
    {
      "id": 14,
      "name": "Bolu",
      "latitude": "40.5760",
      "longitude": "31.5788",
      "population": 291095,
      "region": "Karadeniz"
    },
    {
      "id": 15,
      "name": "Burdur",
      "latitude": "37.4613",
      "longitude": "30.0665",
      "population": 258339,
      "region": "Akdeniz"
    },
    {
      "id": 16,
      "name": "Bursa",
      "latitude": "40.2669",
      "longitude": "29.0634",
      "population": 2842547,
      "region": "Marmara"
    },
    {
      "id": 17,
      "name": "Çanakkale",
      "latitude": "40.1553",
      "longitude": "26.4142",
      "population": 513341,
      "region": "Marmara"
    },
    {
      "id": 18,
      "name": "Çankırı",
      "latitude": "40.6013",
      "longitude": "33.6134",
      "population": 180945,
      "region": "İç Anadolu"
    },
    {
      "id": 19,
      "name": "Çorum",
      "latitude": "40.5506",
      "longitude": "34.9556",
      "population": 525180,
      "region": "Karadeniz"
    },
    {
      "id": 20,
      "name": "Denizli",
      "latitude": "37.7765",
      "longitude": "29.0864",
      "population": 993442,
      "region": "Ege"
    },
    {
      "id": 21,
      "name": "Diyarbakır",
      "latitude": "37.9144",
      "longitude": "40.2306",
      "population": 1654196,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 22,
      "name": "Edirne",
      "latitude": "41.6818",
      "longitude": "26.5623",
      "population": 402537,
      "region": "Marmara"
    },
    {
      "id": 23,
      "name": "Elâzığ",
      "latitude": "38.6810",
      "longitude": "39.2264",
      "population": 574304,
      "region": "Doğu Anadolu"
    },
    {
      "id": 24,
      "name": "Erzincan",
      "latitude": "39.7500",
      "longitude": "39.5000",
      "population": 222918,
      "region": "Doğu Anadolu"
    },
    {
      "id": 25,
      "name": "Erzurum",
      "latitude": "39.9000",
      "longitude": "41.2700",
      "population": 762321,
      "region": "Doğu Anadolu"
    },
    {
      "id": 26,
      "name": "Eskişehir",
      "latitude": "39.7767",
      "longitude": "30.5206",
      "population": 826716,
      "region": "İç Anadolu"
    },
    {
      "id": 27,
      "name": "Gaziantep",
      "latitude": "37.0662",
      "longitude": "37.3833",
      "population": 1931836,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 28,
      "name": "Giresun",
      "latitude": "40.9128",
      "longitude": "38.3895",
      "population": 426686,
      "region": "Karadeniz"
    },
    {
      "id": 29,
      "name": "Gümüşhane",
      "latitude": "40.4386",
      "longitude": "39.5086",
      "population": 151449,
      "region": "Karadeniz"
    },
    {
      "id": 30,
      "name": "Hakkâri",
      "latitude": "37.5833",
      "longitude": "43.7333",
      "population": 278775,
      "region": "Doğu Anadolu"
    },
    {
      "id": 31,
      "name": "Hatay",
      "latitude": "36.4018",
      "longitude": "36.3498",
      "population": 1533507,
      "region": "Akdeniz"
    },
    {
      "id": 32,
      "name": "Isparta",
      "latitude": "37.7648",
      "longitude": "30.5566",
      "population": 421766,
      "region": "Akdeniz"
    },
    {
      "id": 33,
      "name": "Mersin",
      "latitude": "36.8000",
      "longitude": "34.6333",
      "population": 1745221,
      "region": "Akdeniz"
    },
    {
      "id": 34,
      "name": "İstanbul",
      "latitude": "41.0053",
      "longitude": "28.9770",
      "population": 14657434,
      "region": "Marmara"
    },
    {
      "id": 35,
      "name": "İzmir",
      "latitude": "38.4189",
      "longitude": "27.1287",
      "population": 4168415,
      "region": "Ege"
    },
    {
      "id": 36,
      "name": "Kars",
      "latitude": "40.6167",
      "longitude": "43.1000",
      "population": 292660,
      "region": "Doğu Anadolu"
    },
    {
      "id": 37,
      "name": "Kastamonu",
      "latitude": "41.3887",
      "longitude": "33.7827",
      "population": 372633,
      "region": "Karadeniz"
    },
    {
      "id": 38,
      "name": "Kayseri",
      "latitude": "38.7312",
      "longitude": "35.4787",
      "population": 1341056,
      "region": "İç Anadolu"
    },
    {
      "id": 39,
      "name": "Kırklareli",
      "latitude": "41.7333",
      "longitude": "27.2167",
      "population": 346973,
      "region": "Marmara"
    },
    {
      "id": 40,
      "name": "Kırşehir",
      "latitude": "39.1425",
      "longitude": "34.1709",
      "population": 225562,
      "region": "İç Anadolu"
    },
    {
      "id": 41,
      "name": "Kocaeli",
      "latitude": "40.8533",
      "longitude": "29.8815",
      "population": 1780055,
      "region": "Marmara"
    },
    {
      "id": 42,
      "name": "Konya",
      "latitude": "37.8667",
      "longitude": "32.4833",
      "population": 2130544,
      "region": "İç Anadolu"
    },
    {
      "id": 43,
      "name": "Kütahya",
      "latitude": "39.4167",
      "longitude": "29.9833",
      "population": 571463,
      "region": "Ege"
    },
    {
      "id": 44,
      "name": "Malatya",
      "latitude": "38.3552",
      "longitude": "38.3095",
      "population": 772904,
      "region": "Doğu Anadolu"
    },
    {
      "id": 45,
      "name": "Manisa",
      "latitude": "38.6191",
      "longitude": "27.4289",
      "population": 1380366,
      "region": "Ege"
    },
    {
      "id": 46,
      "name": "Kahramanmaraş",
      "latitude": "37.5858",
      "longitude": "36.9371",
      "population": 1096610,
      "region": "Akdeniz"
    },
    {
      "id": 47,
      "name": "Mardin",
      "latitude": "37.3212",
      "longitude": "40.7245",
      "population": 796591,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 48,
      "name": "Muğla",
      "latitude": "37.2153",
      "longitude": "28.3636",
      "population": 908877,
      "region": "Ege"
    },
    {
      "id": 49,
      "name": "Muş",
      "latitude": "38.9462",
      "longitude": "41.7539",
      "population": 408728,
      "region": "Doğu Anadolu"
    },
    {
      "id": 50,
      "name": "Nevşehir",
      "latitude": "38.6939",
      "longitude": "34.6857",
      "population": 286767,
      "region": "İç Anadolu"
    },
    {
      "id": 51,
      "name": "Niğde",
      "latitude": "37.9667",
      "longitude": "34.6833",
      "population": 346114,
      "region": "İç Anadolu"
    },
    {
      "id": 52,
      "name": "Ordu",
      "latitude": "40.9839",
      "longitude": "37.8764",
      "population": 728949,
      "region": "Karadeniz"
    },
    {
      "id": 53,
      "name": "Rize",
      "latitude": "41.0201",
      "longitude": "40.5234",
      "population": 328979,
      "region": "Karadeniz"
    },
    {
      "id": 54,
      "name": "Sakarya",
      "latitude": "40.6940",
      "longitude": "30.4358",
      "population": 953181,
      "region": "Marmara"
    },
    {
      "id": 55,
      "name": "Samsun",
      "latitude": "41.2928",
      "longitude": "36.3313",
      "population": 1279884,
      "region": "Karadeniz"
    },
    {
      "id": 56,
      "name": "Siirt",
      "latitude": "37.9333",
      "longitude": "41.9500",
      "population": 320351,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 57,
      "name": "Sinop",
      "latitude": "42.0231",
      "longitude": "35.1531",
      "population": 204133,
      "region": "Karadeniz"
    },
    {
      "id": 58,
      "name": "Sivas",
      "latitude": "39.7477",
      "longitude": "37.0179",
      "population": 618617,
      "region": "İç Anadolu"
    },
    {
      "id": 59,
      "name": "Tekirdağ",
      "latitude": "40.9833",
      "longitude": "27.5167",
      "population": 937910,
      "region": "Marmara"
    },
    {
      "id": 60,
      "name": "Tokat",
      "latitude": "40.3167",
      "longitude": "36.5500",
      "population": 593990,
      "region": "Karadeniz"
    },
    {
      "id": 61,
      "name": "Trabzon",
      "latitude": "41.0015",
      "longitude": "39.7178",
      "population": 768417,
      "region": "Karadeniz"
    },
    {
      "id": 62,
      "name": "Tunceli",
      "latitude": "39.3074",
      "longitude": "39.4388",
      "population": 86076,
      "region": "Doğu Anadolu"
    },
    {
      "id": 63,
      "name": "Şanlıurfa",
      "latitude": "37.1591",
      "longitude": "38.7969",
      "population": 1892320,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 64,
      "name": "Uşak",
      "latitude": "38.6823",
      "longitude": "29.4082",
      "population": 353048,
      "region": "Ege"
    },
    {
      "id": 65,
      "name": "Van",
      "latitude": "38.4891",
      "longitude": "43.4089",
      "population": 1096397,
      "region": "Doğu Anadolu"
    },
    {
      "id": 66,
      "name": "Yozgat",
      "latitude": "39.8181",
      "longitude": "34.8147",
      "population": 419440,
      "region": "İç Anadolu"
    },
    {
      "id": 67,
      "name": "Zonguldak",
      "latitude": "41.4564",
      "longitude": "31.7987",
      "population": 595907,
      "region": "Karadeniz"
    },
    {
      "id": 68,
      "name": "Aksaray",
      "latitude": "38.3687",
      "longitude": "34.0370",
      "population": 386514,
      "region": "İç Anadolu"
    },
    {
      "id": 69,
      "name": "Bayburt",
      "latitude": "40.2552",
      "longitude": "40.2249",
      "population": 78550,
      "region": "Karadeniz"
    },
    {
      "id": 70,
      "name": "Karaman",
      "latitude": "37.1759",
      "longitude": "33.2287",
      "population": 242196,
      "region": "İç Anadolu"
    },
    {
      "id": 71,
      "name": "Kırıkkale",
      "latitude": "39.8468",
      "longitude": "33.5153",
      "population": 270271,
      "region": "İç Anadolu"
    },
    {
      "id": 72,
      "name": "Batman",
      "latitude": "37.8812",
      "longitude": "41.1351",
      "population": 566633,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 73,
      "name": "Şırnak",
      "latitude": "37.4187",
      "longitude": "42.4918",
      "population": 490184,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 74,
      "name": "Bartın",
      "latitude": "41.5811",
      "longitude": "32.4610",
      "population": 190708,
      "region": "Karadeniz"
    },
    {
      "id": 75,
      "name": "Ardahan",
      "latitude": "41.1105",
      "longitude": "42.7022",
      "population": 99265,
      "region": "Doğu Anadolu"
    },
    {
      "id": 76,
      "name": "Iğdır",
      "latitude": "39.8880",
      "longitude": "44.0048",
      "population": 192435,
      "region": "Doğu Anadolu"
    },
    {
      "id": 77,
      "name": "Yalova",
      "latitude": "40.6500",
      "longitude": "29.2667",
      "population": 233009,
      "region": "Marmara"
    },
    {
      "id": 78,
      "name": "Karabük",
      "latitude": "41.2061",
      "longitude": "32.6204",
      "population": 236978,
      "region": "Karadeniz"
    },
    {
      "id": 79,
      "name": "Kilis",
      "latitude": "36.7184",
      "longitude": "37.1212",
      "population": 130655,
      "region": "Güneydoğu Anadolu"
    },
    {
      "id": 80,
      "name": "Osmaniye",
      "latitude": "37.2130",
      "longitude": "36.1763",
      "population": 512873,
      "region": "Akdeniz"
    },
    {
      "id": 81,
      "name": "Düzce",
      "latitude": "40.8438",
      "longitude": "31.1565",
      "population": 360388,
      "region": "Karadeniz"
    }
  ]


  if (data && data.cod === 429) {
    return (
      <div className={styles.alert}>
        <div className={`container ${styles.container}`}>
          <div className={styles.top}>
            <BlockedIcon />
            <h1>Hesap limitleri aşıldı.</h1>
            <p>1 saat sonra tekrar deneyin. Anlayışınız için teşekkürler.</p>
            <Link href="https://kursadsimsek.com/"><a target={'_blank'}>{"KursadJS'i ziyaret et"}</a></Link>
          </div>
        </div>
      </div>
    )
  }
  if (error && !data) {
    return (
      <div className={styles.alert}>
        <div className={`container ${styles.container}`}>
          <div className={styles.top}>
            <GpsSlashIcon />
            <h1>Konum erişimi reddedildi.</h1>
            <p>Uygulamayı kullanabilmek için konum izni verin yada aşağıdan bir konum seçin.</p>
          </div>
          <Cities data={cities} getData={getDataCity} />
        </div>
      </div>
    )
  }
  if (!data) {
    return (<Loader />)
  }

  return (
    <div className={styles.Home}>
      <Head>
        <title>Havagi - Weather App</title>
        <meta name="description" content="Anlık hava durumu uygulaması" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`container ${styles.container}`}>

        <div className={styles.header}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>

          <div className={styles.location}>
            <button onClick={() => getDataLocation()}>
              <GpsIcon />
            </button>
            <button onClick={() => setModal(!modal)}>
              <LocationIcon />
              <p>{data.name}</p>
            </button>
          </div>
        </div>

        <div className={styles.main}>

          <div className={styles.top}>
            <div className={styles.icon}>
              {getIcon(data.weather[0].icon)}
            </div>

            <div className={styles.temp}>
              <h4>{data.main.temp}<span>°C</span></h4>
              <p>{data.weather[0].description}</p>
            </div>
          </div>

          <ul>
            <li>
              <p>{data.main.feels_like}<i>°C</i></p>
              <span>Hissedilen</span>
              <div className={styles.icon}>
                <FeelsIcon />
              </div>
            </li>
            <li>
              <p>{data.main.temp_max}<i>°C</i></p>
              <span>En Yüksek</span>
              <div className={styles.icon}>
                <MaxIcon />
              </div>
            </li>
            <li>
              <p>{data.main.temp_min}<i>°C</i></p>
              <span>En Düşük</span>
              <div className={styles.icon}>
                <MinIcon />
              </div>
            </li>
            <li>
              <p>{data.main.humidity}</p>
              <span>Nem Miktarı</span>
              <div className={styles.icon}>
                <HumidityIcon />
              </div>
            </li>
            <li>
              <p>{data.wind.speed}<b>km/sa</b></p>
              <span>Rüzgar</span>
              <div className={styles.icon}>
                <WindIcon />
              </div>
            </li>
          </ul>

        </div>

        <div className={styles.footer}>
          <p>Created by <Link href="https://kursadsimsek.com/"><a target={'_blank'}>@KursadJS</a></Link> with NextJS.</p>
          <p>© 2022 KursadJS</p>
        </div>

        {modal &&
          <Modal state={modal} setState={setModal}>
            <Cities data={cities} getData={getDataCity} setState={setModal} state={modal} />
          </Modal>
        }

      </div>
    </div>
  )
}