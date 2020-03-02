import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';

export default class LatihanSoal extends Component{
  constructor(props){
    super(props)
    this.state={
      data= [
        {
            "title": "Sebutkan sarana yang dapat dipergunakan oleh negara-negara dalam melakukan hubungan internasional menurut J. Frankel, kecuali?",
            "pilihan": [
                "Diplomasi",
                "Ekonomi",
                "Sosialisai",
                "Propaganda",
                "Kekuatan Militer dan Perang"
            ],
            "jawaban": 2
        },
        {
            "title": "Jelaskan apa yang dimaksud dari perjanjian internasional?",
            "pilihan": [
                "Sebuah perjanjian yang dibuat dibawah hukum dalam negeri oleh sepihak negara.",
                "Sebuah perjanjian yang dibuat dibawah hukum internasional oleh beberapa pihak yang berupa negara atau organisasi internasional.",
                "Sebuah perjanjian yang dibuat diatas hukum internasional oleh beberapa pihak yang berupa negara atau organisasi internasional.",
                "Sebuah perjanjian yang dibuat diatas hukum dalam negeri oleh sepihak negara.",
                "Sebuah perjanjian yang dibuat dibawah hukum internasional oleh sepihak negara."
            ],
            "jawaban": 1
        },
        {
            "title": "Perjanjian internasional adalah perjanjian yang diadakan antarbangsa yang bertujuan untuk menciptakan akibat-akibat hukum tertentu, pengertian tersebut dikemukakan oleh?",
            "pilihan": [
                "G. Schwarzenberger",
                "Oppenheimer-Lauterpacht",
                "Konferensi Wina tahun 1969",
                "Pasal 38 ayat 1 Piagam Mahkamah Internasional",
                "Prof Dr. Mochtar Kusumaatmadja SH.LL.M"
            ],
            "jawaban": 4
        },
        {
            "title": "Hal-hal yang menyebabkan dibatalkannya suatu perjanjian, kecuali?",
            "pilihan": [
                "Adanya mufakat",
                "Adanya kecurangan",
                "Adanya ancaman dari sebelah pihak",
                "Ada pihak yang dirugikan",
                "Terjadinya pelanggaran"
            ],
            "jawaban": 0
        },
        {
            "title": "Salah satu dari berakhirnya perjanjian adalah?",
            "pilihan": [
                "Salah satu pihak ingin mengakhiri",
                "Habisnya masa perjanjian",
                "Bertambahnya anggota",
                "Tidak ada pihak yang dirugikan",
                "Terjadinya pelanggaran"
            ],
            "jawaban": 1
        },
        {
            "title": "Dimana perjanjian Indonesia-Australia mengenai batas wilayah antara Indonesia dan Papua Nugini ditandatangani ?",
            "pilihan": [
                "Bandung",
                "Bali",
                "Papua Nugini",
                "Jakarta",
                "Australia"
            ],
            "jawaban": 3
        },
        {
            "title": "Berikut yang tidak ada dalam proses perjanjian internasional menurut UU no.24 thn 2000?",
            "pilihan": [
                "Tahap deklarasi",
                "Tahap penerimaan",
                "Tahap pengesahan",
                "Tahap penjajakan",
                "Tahap perundingan"
            ],
            "jawaban": 0
        },
        {
            "title": "Berikut ini yang tidak termasuk sumber hukum internasional adalah?",
            "pilihan": [
                "Prinsip-prinsip hukum umum",
                "Traktat, asas-asas hukum",
                "Perjanjian internasional",
                "Hubungan internasional",
                "Keputusan pengadilan"
            ],
            "jawaban": 0
        },
        {
            "title": "Kapan organisasi ASEAN didirikan?",
            "pilihan": [
                "18 Agustus 1945",
                "1 Juni 1945",
                "28 Oktober 1928",
                "17 Agustus 1945",
                "8 Agustus 1967"
            ],
            "jawaban": 4
        },
        {
            "title": "Rapat umum negara-negara anggota ASEAN diadakan pada setiap bulan?",
            "pilihan": [
                "Agustus",
                "Juni",
                "Oktober",
                "November",
                "Desember"
            ],
            "jawaban": 3
        },
        {
            "title": "Siapakah negara pendiri ASEAN?",
            "pilihan": [
                "Filipina,Vietnam,Laos,Indonesia,Singapura",
                "Malaysia,Singapura,Kamboja,Myanmar,Laos",
                "Laos,Vietnam,Brunei Darussalam,Myanmar,Kamboja",
                "Filipina,Indonesia,Malaysia,Singapura,Thailand",
                "Thailand,Indonesia,Malaysia,Singapura,Kamboja"
            ],
            "jawaban": 3
        },
        {
            "title": "Perwakilan dari negara Indonesia dalam penanda tangan deklarasi bangkok adalah?",
            "pilihan": [
                "Ki Hajar Dewantara",
                "Adam Malik",
                "Sukarna",
                "Megawati",
                "Ir. Soekarno"
            ],
            "jawaban": 2
        },
        {
            "title": "Organisasi yang bertujuan mengukuhkan pertumbuhan ekonomi dan mempererat komunitas negara-negara di Asia Pasifik adalah?",
            "pilihan": [
                "APEC",
                "OKI",
                "ASEAN",
                "FAO",
                "IMO"
            ],
            "jawaban": 0
        },
        {
            "title": "Presiden RI Soekarno meresmikan penggantian nama Gedung Concordia menjadi?",
            "pilihan": [
                "Gedung Sate",
                "Gedung Dwi Warna",
                "Gedung Dana Pensiun",
                "Gedung Merdeka",
                "Gedung Putih"
            ],
            "jawaban": 4
        },
        {
            "title": "Di kota mana pelaksanaan KAA 1955 dilaksanakan?",
            "pilihan": [
                "Jakarta",
                "Bali",
                "Bandung",
                "Sidoarjo",
                "Tasik Malaya"
            ],
            "jawaban": 3
        },
        {
            "title": "Dimana PBB didirikan?",
            "pilihan": [
                "Washington",
                "San Fransisco",
                "New York",
                "Church House",
                "White House"
            ],
            "jawaban": 2
        },
        {
            "title": "Siapakah pencetus pelanggaran-pelanggaran yang terjadi saat berdirinya PBB?",
            "pilihan": [
                "Ban Ki-moon",
                "Kofi Annan",
                "U Thant",
                "Franklin D. Roosevelt",
                "Corbusier"
            ],
            "jawaban": 3
        },
        {
            "title": "Syarat-syarat menjadi anggota PBB adalah sebagai berikut, kecuali?",
            "pilihan": [
                "Negara merdeka",
                "Negara yang cinta damai",
                "Negara individualisme",
                "Sanggup mematuhi ketentuan-ketentuan yang tercantum dalam Piagam PBB",
                "Diusulkan oleh Dewan Keamanan dan disahkan oleh Majelis Umum PBB"
            ],
            "jawaban": 2
        },
        {
            "title": "Berapakah jumlah anggota PBB hingga Juli 2011?",
            "pilihan": [
                "139",
                "163",
                "183",
                "173",
                "193"
            ],
            "jawaban": 4
        },
        {
            "title": "Siapakah sekretaris jendral PBB sekarang?",
            "pilihan": [
                "Ban Ki-moon",
                "U Thant",
                "Dag Hamarskjold",
                "Kofi Annan",
                "Kurt Wadheim"
            ],
            "jawaban": 0
        }
      ],
      
      title:'',
      a:'',
      b:'',
      c:'',
      d:'',
      jawaban:[
        {"soal": 1, "jawaban": 2},
        {"soal": 2, "jawaban": 1},
        {"soal": 3, "jawaban": 4},
        {"soal": 4, "jawaban": 0},
        {"soal": 5, "jawaban": 1},
        {"soal": 6, "jawaban": 3},
        {"soal": 7, "jawaban": 0},
        {"soal": 8, "jawaban": 0},
        {"soal": 9, "jawaban": 4},
        {"soal": 10, "jawaban": 3},
        {"soal": 11, "jawaban": 3},
        {"soal": 12, "jawaban": 2},
        {"soal": 13, "jawaban": 0},
        {"soal": 14, "jawaban": 4},
        {"soal": 15, "jawaban": 3},
        {"soal": 16, "jawaban": 2},
        {"soal": 17, "jawaban": 3},
        {"soal": 18, "jawaban": 2},
        {"soal": 19, "jawaban": 4},
        {"soal": 20, "jawaban": 0},

      ],
      myanswer:'',
      soalke: '',
      max: ''
    }
  }
  componentDidMount(){
    // this._getData()
  }
  _getData = async () => {
    const { params } = this.props.navigation.state;
    const soalke = params ? params.nomer : 0
    const token = await AsyncStorage.getItem('TOKEN')
    console.log(token)
    fetch('http://3.92.200.123:9000/api/varrel/soal/v1?type=latihan', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
        }
      })
      .then(respoonse => respoonse.json())
      .then(responseJson => {
        console.log(responseJson)
        // console.log(responseJson.data)
        if(responseJson.code == 200){
          // AsyncStorage.setItem("TOKEN", responseJson.data)
          this.setState({
            title:responseJson.data[soalke].title,
            a: responseJson.data[soalke].pilihan[0],
            b: responseJson.data[soalke].pilihan[1],
            c: responseJson.data[soalke].pilihan[2],
            d:responseJson.data[soalke].pilihan[3],
            jawaban: responseJson.data[soalke].jawaban,
            soalke: soalke,
            max: responseJson.data.length
          })
        }

      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  _choice = (myanswer) =>{
    this.setState({
      myanswer: myanswer
    })
  }
  _pembahasan = () =>{
    const soalke = this.state.soalke
    const myanswer = this.state.myanswer
    const jawaban = this.state.jawaban
    this.props.navigation.navigate('Pembahasan',{ soalke , myanswer, jawaban ,Pembahasan})
  }
  render(){
    return(
     <View style={{flex:1}}>
        <BackButton goBack={()=> this.props.navigation.navigate('')}/>
        <Text style={{ marginTop: 100, paddingLeft: 50, borderBottomColor: '#283293', borderBottomWidth: 1}}>{`Latihan ${this.state.soalke +1}/${this.state.max}`}</Text>
        <View style={{ paddingLeft: 33, paddingRight: 33, marginTop:30}}>
          <Text>{this.state.title}</Text>
        </View>
        <View style={{ paddingLeft: 48, paddingRight: 48, marginTop: 50}}>
          <TouchableOpacity onPress={()=>this._choice(0)}>
            <View style={{ 
                width: 280,
                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                backgroundColor: this.state.myanswer === 0 ? '#25D16A' : '#FFf', 
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                 color: this.state.myanswer === 0 ? '#FFF' : '#25D16A',
                 fontSize: 18
                }}>{this.state.a}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(1)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 1 ? '#25D16A' : '#FFf', 
                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                 color: this.state.myanswer === 1 ? '#FFF' : '#25D16A',
                 fontSize: 18}}>{this.state.b}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(2)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 2 ? '#25D16A' : '#FFf', 

                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                color: this.state.myanswer === 2 ? '#FFF' : '#25D16A',
               fontSize: 18}}>{this.state.c}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(3)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 3 ? '#25D16A' : '#FFf', 

                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                color: this.state.myanswer === 3 ? '#FFF' : '#25D16A',
                fontSize: 18}}>{this.state.d}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'flex-end' , marginTop: 100, marginRight: 40}}>
          <TouchableOpacity onPress={() => this._pembahasan}>
            <Image style={{ width: 50, height: 50}} source={require('../assets/next_quiz.png')} />
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}