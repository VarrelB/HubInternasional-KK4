import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import { Text, ScrollView, View } from 'react-native';
import BackButton from '../components/BackButton';

const Manfaat = ({ navigation }) => (
    <Loginbackground>
        <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
            <BackButton goBack={() => navigation.navigate('Materi')} />
       </View>
    <ScrollView>
    <Text> {"\n"}
      {"\n"}{"\n"}{"\n"}
F. MANFAAT KERJASAMA DAN PERJANJIAN INTERNASIONAL Manfaat Kerja sama Internasional bagi Indonesia :{"\n"}
1. Dewan Keamanan PBB menghentikan Agresi Militer Belanda I atas usul India dan Australia.{"\n"}
2. Perundingan Indonesia Belanda melalui Jasa baik KTN (komisi Tiga Negara) untuk menghentikan pendudukan belanda di Indonesia.{"\n"}
3. PBB mengeluarkan resolusi untuk menghentikan Agresi Militer belanda II yang berisi :{"\n"}
- Hentikan saling menyerang - Membebaskan segala tawanan - Berunding atas dasar Perjanjian Lingarjati dan renville - Pemerintahan RI dikembalikan ke Yogyakarta.{"\n"}
4. Pengembalian Irian barat oleh PBB dari tangan belanda ke RI tahun 1962{"\n"}
5. Pengakuan kedaulatan RI oleh belanda melalui KMB tanggal 27 Desember 1949.{"\n"}
Manfaat Perjanjian Internasional bagi bangsa Indonesia :{"\n"}
1. Diterimanya konsep Negara kepulauan (archipelagic state) Wawasan Nusantara.{"\n"}
2. Penentuan Batas Wilayah laut RI melalui Konvensi Hukum Laut Internasional tahun 1982, yaitu :{"\n"}
a. Batas wilayah 12 mil laut teritorial Negara pantai dan Negara kepulauan.{"\n"}
b. batas 200 mil laut ZEE (Zona Ekonomi Eksklusif).{"\n"}
c. pengakuan hak Negara tak berpantai utk ikut memanfaatkan sumber daya alam dan kekayaan lautan.{"\n"}
 
Mendukung terhadap kerjasama dan perjanjian internasional Sikap positif bangsa Indonesia dalam pergaulan dunia harus terus dikembangkan, antara lain dengan usaha berikut :{"\n"}
a. Memperkenalkan kebudayaan nasional{"\n"}
b. Berperan aktif dalam menyelesaikan permasalahan dunia yang bertentangan dengan nilai-nilai kemanusiaan dan keadilan{"\n"}
c. Kemampuan antisipasi dan penyesuaian terhadap perkembangan, perubahan, dan gejolak dunia melalui jalur diplomasi disertai dengan pendekatan yang tepat sesuai dengan kepentingan nasional{"\n"}
d. Penggalangan dan pemupukan solidaritas, kesatuan, dan sikap kerjasama diantara Negara-negara berkembang maupun Negara maju melalui organisasi internasional seperti ASEAN, OKI, GNB dan PBB.{"\n"}
e. Meningkatkan kegiatan ekonomi melalui perdagangan ekspor dan impor, tukar menukar ilmu pengetahuan dan teknologi{"\n"}
</Text>
</ScrollView>
</Loginbackground>
);

export default memo(Manfaat);
