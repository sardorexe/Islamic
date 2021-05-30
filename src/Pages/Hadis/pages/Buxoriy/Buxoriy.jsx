import React from "react";
import WrapperSimple from "../../components/Wrappers/WrapperSimple";
import "./Buxoriy.css";

function Buxoriy() {
  return (
    <div className="Buxoriy">
      <div className="about-bukhariy col-sm-10 col-12 col-md-12 col-lg-12">
        <h1 className="about-title">Buxoriy</h1>
        <p className="about-content">
          Imom al-Buxoriy, to'liq ismi Abu Abdulloh Muhammad ibn Ismoil ibn
          Ibrohim al Buxoriy bo'lgan buyuk islom mutafakkiri, muhaddislar olimi
          milodiy 810 - yilda Buxoroda taqvodor oilada tavallud topdi. Otasi
          Ismoil o'z davrining yetuk muhaddislaridan, Malik ibn Alasga yaqin
          inson bo'lib asosiy mashg'uloti tijorat edi. Onasi taqvodor,
          diyonatli, ayol edi. Otasi vafotidan so'ng uning tarbiyasi onasi
          qo'liga o'tadi. U kichkinaligidan islomiy ilmlarni va hadislarni
          o'rganishni boshladi. Doxiliy, Muhammad ibn Salom Poykandiy, Muhammad
          ibn Yusuf Poykandiy, Abdulloh ibn Muhammad Masnadiy va shu kabi boshqa
          mashhur muhaddislardan saboq olgan.Buxoriy 16 yoshga yetguncha, o‘z
          yurtidagi mashoyixlardan hadis eshitib, yozib olib, xalifalikning
          turli viloyatlari tomon yo‘l oladi. 825 yil Buxoriy onasi va akasi
          Ahmad bilan Makkaga kelib, haj ibodatini ado etadi. Onasi va akasini
          Buxoroga qaytarib, o‘zi Makkada qoladi. Bu yerda faoliyat
          ko‘rsatayotgan olimlarning ilmiy yig‘inida qatnashadi. 827 yil
          Madinaga boradi. Madinadagi mashhur ulamolardan Ibrohim ibn Munzir,
          Mutrif ibn Abdulloh, Ibrohim ibn Hamza va boshqalar bilan muloqotda
          bo‘lib, ulardan hadislar bo‘yicha saboq oladi. Bu vaqtda
          Rasulullohning sahobalari, sahobalarning izdoshlari turli mamlakatga
          tarqab ketgan edilar. Shunday sharoitda Muhammad(s.a.v)ning
          hadislarini to‘plash turli shahar va mamlakatlarga borishni taqozo
          qilar edi. Bir necha tarixchilarning taʼkidlashicha, Imom Buxoriy
          Hijoz, Makka, Madina, Toif, Jiddaga qilgan safarlari 6 yil davom
          etgan. So‘ng Basra, Kufa va Bag‘dodga safar qiladi. Shom va Misrga
          o‘tadi. Bundan tashqari Xuroson, Marv, Balx, Hirot, Nishopur, Ray,
          Jibol kabi shaharlarda bo‘lib, bu shaharlardagi olimlardan saboq oldi
          va hadislar to‘pladi. Imom Buxoriyning asarlari orasida eng mashhur
          bo‘lgani “Al-jome’ as-Sahih”dir.
        </p>
      </div>
      <h2
        style={{ fontWeight: "700" }}
        className="mt-5 mb-3 start-wrappers"
      >
        Hadislardan Namunalar:
      </h2>
      <WrapperSimple
        title="1. Iymon Kitobi"
        content={`Rasululloh sallolohu alayhi va sallam bunday deganlar:”Islom 5 dalil asosiga
        qurilgan. (Islomdan murod iymon demakdir). Iymon so’zda ham ,amalda ham bo’lmog’i
        kerak. Iymon kuchaygaydir va susaygaydir”.      
        Dalili: Olloh taolo Qur’oni Karimda: ”Iymonlarini yanada ziyoda qilsinlar, deb ularga
        hidoyatimizni ziyoda qildik” va “Olloh taolo hidoyat topgan kishilarning hidoyatini ziyoda
        qildi va ularga taqvo ato etdi”, - deb aytgan. Rasululloh sallolohu alayhi va sallamning
        “Ollohni deb yaxshi ko’rish va Ollohni deb yomon ko’rish iymondandir.” Degan so’zlari
        ham iymonning mustahkamlanishi yoki susayishini anglatadi.
        Halifa Umar ibn Abdulaziz Adiy ibn Adiyga bunday deb yozgan:”Albatta, iymonning ham
        o’z farz va amallari, muayyan chegaralari,bajarilishi lozim bo’lgan sunnatlari
        mavjuddir.Demak, kimki bularga to’liq amal qilsa, iymoni mukammal bo’lgaydir,kimki
        yetarli rioya qilmasa, iymoni sust bo’lgaydir.Agar umrim uzoq bo’lsa, sizlarga bilib
        olishlaringiz uchun bular haqida birma-bir bayon qilarman, basharti vafot etsam,
        suhbatingizga mushtoqligim yo’q”. Sahoba Maoz: ”Kel, biz bilan biroz o’tir, oymon haqida suhbatlashaylik!”-deganlar.
        Ibn Umar aytganlar:”Banda ko’ngliga kelgan har bir gunoh xavfi bor narsani tark
        etmaguncha taqvo haqiqatiga yeta olmaydir. Rasululloh sallolohu alayhi va
        sallam:”Islom 5 dalildan iborat” , - deganlar`}
        section="Sahihi Buxoriy, 1-jild"
      />
    </div>
  );
}

export default Buxoriy;
