export interface Song {
  title: string;
  link: string;
}

export type SongDatabase = Record<string, Record<string, Song[]>>;

export const songs: SongDatabase = {
  happy: {
    Hindi: [
      { title: "Love You Zindagi - Dear Zindagi", link: "https://www.youtube.com/watch?v=bw7bVpI5VcM" },
      { title: "Zoobi Doobi - 3 Idiots", link: "https://www.youtube.com/watch?v=V056WNg3ECo" },
      { title: "London Thumakda - Queen", link: "https://www.youtube.com/watch?v=udra3Mfw2oo" },
      { title: "Kya Yahi Pyar Hai - Rocky", link: "https://www.youtube.com/watch?v=LJdxa8SnNdY" },
      { title: "Tujh Mein Rab Dikhta Hai - Rab Ne Bana Di Jodi", link: "https://www.youtube.com/watch?v=qoq8B8ThgEM" }
    ],
    Telugu: [
      { title: "Em Sandeham Ledu - Oohalu Gusagusalade", link: "https://www.youtube.com/watch?v=kG1jb6zRn10" },
      { title: "Vachindamma - Geetha Govindam", link: "https://www.youtube.com/watch?v=xVcoYF--0mM" },
      { title: "Idedo Bagundi - Mirchi", link: "https://www.youtube.com/watch?v=VQ2-HPwxAZY" },
      { title: "Butta Bomma - AlaVaikunthapurramuloo", link: "https://www.youtube.com/watch?v=2mDCVzruYzQ" },
      { title: "Choododdantunna - Pokiri", link: "https://www.youtube.com/watch?v=asynVIsf3FM" }
    ],
    Tamil: [
      { title: "Mukkala Mukkabala - Kadhalan", link: "https://www.youtube.com/watch?v=tJuos-SP3Tw" },
      { title: "Vaathi Coming - Master", link: "https://www.youtube.com/watch?v=fRD_3vJagxk" },
      { title: "Hey Baby - Aegan", link: "https://www.youtube.com/watch?v=urVoP8BYzlk" },
      { title: "Otha Sollaala - Aadukalam", link: "https://www.youtube.com/watch?v=A7tXr6GpAA8" },
      { title: "Pulveli - Aasai", link: "https://www.youtube.com/watch?v=4CSZAV3VIg4" }
    ],
    Bengali: [
      { title: "Hasle Je Misti Kore - Monermanush", link: "https://www.youtube.com/watch?v=e0yU7LM2AY0" },
      { title: "Amake Amar Moto Thakte Dao - Autograph", link: "https://www.youtube.com/watch?v=vYsfSlEBh5Y" },
      { title: "Du Mutho Bikel - Debi", link: "https://www.youtube.com/watch?v=AyvVlYWcmT0" },
      { title: "Ekla Cholo Re - Kahaani", link: "https://www.youtube.com/watch?v=-d9QOzkxMKU" },
      { title: "Bojhena Shey Bojhena - Titel track", link: "https://www.youtube.com/watch?v=J2JQQm1h6xQ" }
    ],
    Kannada: [
      { title: "Dwapara - Krishnam Pranaya Sakhi", link: "https://www.youtube.com/watch?v=wiur_AGatGU" },
      { title: "Belageddu - Kirik Party", link: "https://www.youtube.com/watch?v=ebz20FHrT44" },
      { title: "Yeno Yeno Aagide - Googly", link: "https://www.youtube.com/watch?v=sWk9lpkGAfs" },
      { title: "Bombe Helutaithe - Raajakumara", link: "https://www.youtube.com/watch?v=gy5_T2ACerk" },
      { title: "Ninnindale - Milana", link: "https://www.youtube.com/watch?v=-xmRjO2G05c" }
    ]
  },
  sad: {
    Hindi: [
      { title: "Channa Mereya - ADHM", link: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
      { title: "Tujhe Kitna Chahne Lage - Kabir Singh", link: "https://www.youtube.com/watch?v=2IGDsD-dLF8" },
      { title: "Kabira - Yeh Jawaani Hai Deewani", link: "https://www.youtube.com/watch?v=jHNNMj5bNQw" },
      { title: "Tum Hi Ho - Aashiqui 2", link: "https://www.youtube.com/watch?v=IJq0yyWug1k" },
      { title: "Khamoshiyan - Title Track", link: "https://www.youtube.com/watch?v=Mv3SZDP7QUo" }
    ],
    Telugu: [
      { title: "Evarini Adaganu - Sita Ramam", link: "https://www.youtube.com/watch?v=Tru9NqcMZoQ" },
      { title: "Emai Poyave - Padi Padi Leche Manasu", link: "https://www.youtube.com/watch?v=Eyx0Hvi1_Ng" },
      { title: "Telisiney Na Nuvvey - Arjun Reddy", link: "https://www.youtube.com/watch?v=jOst7Trpj7o" },
      { title: "Oosupodu - Fidaa", link: "https://www.youtube.com/watch?v=e4N9al7vhVQ" },
      { title: "Em Cheppanu - Nenu Sailaja", link: "https://www.youtube.com/watch?v=9m3mT4KV3es" }
    ],
    Tamil: [
      { title: "Kanave Kanave - David", link: "https://www.youtube.com/watch?v=FHBoZgRwvSQ" },
      { title: "Po Nee Po - 3", link: "https://www.youtube.com/watch?v=DnyA_qEbTpw" },
      { title: "Uyire Uyire Piriyadhey - Santosh Subramaniam", link: "https://www.youtube.com/watch?v=HpNQKvPOt38" },
      { title: "Indru Netru Naalai - Title Track", link: "https://www.youtube.com/watch?v=5wOM1AGUBZM" },
      { title: "Venmegam - Yaaradi Nee Mohini", link: "https://www.youtube.com/watch?v=JzTNs0gY_ZU" }
    ],
    Bengali: [
      { title: "Chokher Jole - Poran Jai", link: "https://www.youtube.com/watch?v=AeOZB95DOhA" },
      { title: "Bahu Manaratha - Memories in March", link: "https://www.youtube.com/watch?v=te8LQ0WTjVE" },
      { title: "Amar Aguner Chhai - Mon Jaane Na", link: "https://www.youtube.com/watch?v=-RSvsJL-a3c" },
      { title: "Eka Ekela Mon - Chirodini Tumi Je Amar 2", link: "https://www.youtube.com/watch?v=b6uPyqdvt4E" },
      { title: "Piya Re Piya Re - Chirodini Tumi Je Amar", link: "https://www.youtube.com/watch?v=ozisKGdhlUQ" }
    ],
    Kannada: [
      { title: "Chithaara - Ugramm", link: "https://www.youtube.com/watch?v=p757ritUBwY" },
      { title: "Anisuthide - Mungaru Male", link: "https://www.youtube.com/watch?v=nlsLKA6hlVQ" },
      { title: "Kaarmodana - Mr & Mrs Ramachari", link: "https://www.youtube.com/watch?v=hYOXLwqviR8" },
      { title: "Mussanje Veleli - Addhoori", link: "https://www.youtube.com/watch?v=dYzD4OqzS9A" },
      { title: "Male Ninthu Hoda Mele - Milana", link: "https://www.youtube.com/watch?v=P5-vLnColQc" }
    ]
  },
  angry: {
    Hindi: [
      { title: "Apna Time Aayega - Gully Boy", link: "https://www.youtube.com/watch?v=jFGKJBPFdUA" },
      { title: "Get Ready To Fight Again - Baaghi 2", link: "https://www.youtube.com/watch?v=zLVZxHWL0ro" },
      { title: "Saturday Saturday - Humpty Sharma Ki Dulhania", link: "https://www.youtube.com/watch?v=OljkSVLIt6c" },
      { title: "Abhi Toh Party Shuru Hui Hai - Khoobsurati", link: "https://www.youtube.com/watch?v=8LZgzAZ2lpQ" },
      { title: "Palat Tera Hero Idhar Hai - Main Tera Hero", link: "https://www.youtube.com/watch?v=9vkcYxbGdTE" }
    ],
    Telugu: [
      { title: "Dheera Dheera - KGF", link: "https://www.youtube.com/watch?v=IuS4LL_ALrU" },
      { title: "Dhruva Dhruva - Title Track", link: "https://www.youtube.com/watch?v=RcMQuy1ObeY" },
      { title: "Sainika - Naa Peru Surya", link: "https://www.youtube.com/watch?v=eHp3zQAAZso" },
      { title: "Dont Stop - Nannaku Prematho", link: "https://www.youtube.com/watch?v=RWve-9n0m48" },
      { title: "Spirit Of Jersey - Jersey", link: "https://www.youtube.com/watch?v=_xuI60USDjw" }
    ],
    Tamil: [
      { title: "Blood Bath - Asuran", link: "https://www.youtube.com/watch?v=x7qwz_1TjLk" },
      { title: "Villain World - Sathuranka Vettai 2", link: "https://www.youtube.com/watch?v=sGGXV9KDH3M" },
      { title: "Karuppu Vellai - Vikram Vedha", link: "https://www.youtube.com/watch?v=4AYAcFcFu84" },
      { title: "Surviva - Vivegam", link: "https://www.youtube.com/watch?v=QNZiwr7nYMk" },
      { title: "Porkanda Singam - Vikram", link: "https://www.youtube.com/watch?v=B789Cx9CpaY" }
    ],
    Bengali: [
      { title: "Party Shoes - Bindaas", link: "https://www.youtube.com/watch?v=QgHlVCbss4M" },
      { title: "Bhojo Gourango - Challenge", link: "https://www.youtube.com/watch?v=cvECxUpn4Cg" },
      { title: "Michhrir Dana - Bibaho Obhijaan", link: "https://www.youtube.com/watch?v=uo87VC3pyW0" },
      { title: "Boudi Superhit - Dupur Thakurpo", link: "https://www.youtube.com/watch?v=2EEJhrtq8yU" },
      { title: "Ami Chai Thakte - Nusraat Faria", link: "https://www.youtube.com/watch?v=RqxLkfZMduM" }
    ],
    Kannada: [
      { title: "Feel the Power - Yuvarathnaa", link: "https://www.youtube.com/watch?v=aPiZ--ASZI0" },
      { title: "Pogaru - Title Track", link: "https://www.youtube.com/watch?v=lx0pIwDKPW0" },
      { title: "Ba Ba Ba Na Ready - Roberrt", link: "https://www.youtube.com/watch?v=DvfCFfDod6g" },
      { title: "Toofan - KGF Chapter 2", link: "https://www.youtube.com/watch?v=Vl-VFHtkE6w" },
      { title: "Self Made Shehzaada - Santhu Straight Forward", link: "https://www.youtube.com/watch?v=6IPAivFf6kE" }
    ]
  },
  fearful: {
    Hindi: [
      { title: "Talaash Muskaanein Jhooti Hai - Talaash", link: "https://www.youtube.com/watch?v=C805Nt0JPIY" },
      { title: "Pachtaoge - Album", link: "https://www.youtube.com/watch?v=PVxc5mIHVuQ" },
      { title: "Hai Jamalo - Munjya", link: "https://www.youtube.com/watch?v=cncXEgZt-EI" },
      { title: "The Bhoot - Housefull 4", link: "https://www.youtube.com/watch?v=MfTuOyJTfIQ" },
      { title: "Shaitaan - Title Track", link: "https://www.youtube.com/watch?v=jLshY-zUfZ4" }
    ],
    Telugu: [
      { title: "Nandikonda Vaagullona - Geethanjali", link: "https://www.youtube.com/watch?v=yt3WB_Nuq54" },
      { title: "Chandramukhi - Title Track", link: "https://www.youtube.com/watch?v=Qrn3BDqSsmc" },
      { title: "Agni Muni - Ganga", link: "https://www.youtube.com/watch?v=UOjnjo8HMaM" },
      { title: "Arundhati - Title Track", link: "https://www.youtube.com/watch?v=HjHA0KMPclY" },
      { title: "Thaalajaalane - Om Bheem Bush", link: "https://www.youtube.com/watch?v=yQsI9hppc_w" }
    ],
    Tamil: [
      { title: "Kodiavanin Kathaya - Kanchana", link: "https://www.youtube.com/watch?v=AKz8TUrUZN8" },
      { title: "Mohini - Mohini Rage", link: "https://www.youtube.com/watch?v=08-pE8E7T4k" },
      { title: "Jayalakshmi - Saithan", link: "https://www.youtube.com/watch?v=JNjEI_Jprz0" },
      { title: "Yaar Nee - Kolai", link: "https://www.youtube.com/watch?v=R4SpNSA4lIg" },
      { title: "Ilamai Thirumbudhe - Petta", link: "https://www.youtube.com/watch?v=TKeU1bLlAcc" }
    ],
    Bengali: [
      { title: "Athmave Poo - Romancham", link: "https://www.youtube.com/watch?v=eysNkSGQH_I" },
      { title: "Neelavelicham - Pottithakarnna Kinavu", link: "https://www.youtube.com/watch?v=SkBrZoG9jng" },
      { title: "Nizhalai Ozhuki Varum Njan - Kalliyankaattu Neeli", link: "https://www.youtube.com/watch?v=CnMfzzCQj3g" },
      { title: "Nilaavinte Poonkaavil - Sreekrishna Parunthu", link: "https://www.youtube.com/watch?v=eiH1db-uDxg" },
      { title: "Puthumazhayayi - Akashaganga", link: "https://www.youtube.com/watch?v=1IDN1ysYfsQ" }
    ],
    Kannada: [
      { title: "Ra Ra Sarasaku - Chandhramukhi", link: "https://www.youtube.com/watch?v=ReeQgwpRO88" },
      { title: "Thangali Naa - Kanakambari", link: "https://www.youtube.com/watch?v=wbS1WibShfA" },
      { title: "Preethige Hottu Gottilla - Ondhu Preethiya Kathe", link: "https://www.youtube.com/watch?v=OVOssuoUpQU" },
      { title: "Maaye Neenondu Maaye - Jessie", link: "https://www.youtube.com/watch?v=yEodkMUqJw4" },
      { title: "Masterpiece - Title Track", link: "https://www.youtube.com/watch?v=WG6xGtBuOnM" }
    ]
  },
  neutral: {
    Hindi: [
      { title: "Tujh Mein Rab Dikhta Hai - Rab Ne Bana Di Jodi", link: "https://www.youtube.com/watch?v=qoq8B8ThgEM" },
      { title: "Balam Pichkari - Yeh Jawaani Hai Deewani", link: "https://www.youtube.com/watch?v=0WtRNGubWGA" },
      { title: "Khaabon Ke Parinday - Zindagi Na Milegi Dobara", link: "https://www.youtube.com/watch?v=R0XjwtP_iTY" },
      { title: "Give Me Some Sunshine - 3 Idiots", link: "https://www.youtube.com/watch?v=lbCRtrrMvSw" },
      { title: "Jame Raho - Taare Zameen Par", link: "https://www.youtube.com/watch?v=VofN1x93TG0" }
    ],
    Telugu: [
      { title: "Kurchi Madathapetti - Guntur Kaaram", link: "https://www.youtube.com/watch?v=gh3FyLT7WVg" },
      { title: "Sooseki - Pushpa 2", link: "https://www.youtube.com/watch?v=qxbHtcfHq2s" },
      { title: "Ramuloo Ramulaa - AlaVaikunthapurramuloo", link: "https://www.youtube.com/watch?v=Bg8Yb9zGYyA" },
      { title: "Diyyalo Diyyala - 100% Love", link: "https://www.youtube.com/watch?v=RAotnwMAXAA" },
      { title: "Dheera Dheera - Magadheera", link: "https://www.youtube.com/watch?v=oMwyxM9MZ50" }
    ],
    Tamil: [
      { title: "Adiye Azhage - Oru Naal Koothu", link: "https://www.youtube.com/watch?v=SDAMyv1hbCo" },
      { title: "Vizhi Moodi - Ayan", link: "https://www.youtube.com/watch?v=5_ocVGY3CtU" },
      { title: "Lolita - Engeyum Kaadhal", link: "https://www.youtube.com/watch?v=NM600z8McII" },
      { title: "Nenjukkul Peidhidum - Vaaranam Aayiram", link: "https://www.youtube.com/watch?v=FzLpP8VBC6E" },
      { title: "Puthu Vellai Mazhai - Roja", link: "https://www.youtube.com/watch?v=nncmCH1jreo" }
    ],
    Bengali: [
      { title: "Hothat Brishti - Ferdous", link: "https://www.youtube.com/watch?v=GJMdS1Q0Ogk" },
      { title: "Tumi Tumi - Neel Akash", link: "https://www.youtube.com/watch?v=WFrYToE_IFc" },
      { title: "Chura Liya Hai Tumne Jo - Yaadon Ki Baaraat", link: "https://www.youtube.com/watch?v=RVYAR89Swjg" },
      { title: "Kothay Chilam Kothay Jabo - Shabana", link: "https://www.youtube.com/watch?v=A-s4HCNsX9w" },
      { title: "Chhaya Chhobi", link: "https://www.youtube.com/watch?v=rQ2zxiysdVQ" }
    ],
    Kannada: [
      { title: "Ooh La La - KVS", link: "https://www.youtube.com/watch?v=hVd8nUJcuwU" },
      { title: "Nagu Endhidhe - Pallavi Anupallavi", link: "https://www.youtube.com/watch?v=5RuMpVFPMHQ" },
      { title: "Sanju Mattu Geetha - Sanju Weds Geetha", link: "https://www.youtube.com/watch?v=KIFgmT3D5T8" },
      { title: "Ee Santhelu Siguva - Sundaranga Jaana", link: "https://www.youtube.com/watch?v=MBk-2n6RUWU" },
      { title: "Manasake Neene - Lucky Man", link: "https://www.youtube.com/watch?v=m9b4lp7K7pg" }
    ]
  }
};