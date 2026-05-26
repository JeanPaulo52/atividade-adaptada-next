import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  async redirects() {
    return [
      {
        // 1. SOURCE (Origem): O link exato da atividade no site antigo
        source: '/nivel-2/2-bncc/artes/pagdow/a-arte-de-promover-impacto/a-arte-de-promover-impacto.html',
        
        // 2. DESTINATION (Destino): O link gerado para essa mesma atividade no site novo
        destination: '/atividades/artes/aJA9VUdEUTDkQceazoFu',
        
        // 3. PERMANENT: O segredo do SEO! Sendo "true", ele cria o Redirecionamento 301.
        // O Google vai ver isso, apagar o link antigo do banco de dados dele e colocar o novo no lugar,
        // transferindo todas as visitas para essa página.
        permanent: true,
      },
      
      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-5/atd-arts-5.html',
        destination: '/atividades/artes/feJ1fviCTo0zqsw46WvC',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/desenhe-igual/2-23.04.25.html',
        destination: '/atividades/artes/92VJv7Svfv14kB5kFRbE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/a-arte-do-manifesto-artistico/a-arte-do-manifesto-artistico.html',
        destination: '/atividades/artes/FlUezXVh9Q2fKYqHA08i',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/o-ensaio-geral/o-ensaio-geral.html',
        destination: '/atividades/artes/yOllmd6Yuqo4bNK7G9bP',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-6/atd-arts-6.html',
        destination: '/atividades/artes/NRT6gFLpxeI7NL3rxaSj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/essa-musica-e-o-bicho!/essa-musica-e-o-bicho!.html',
        destination: '/atividades/artes/gVG0kjDJhu1Pw6KDddkg',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/o-universo-do-frevo/o-universo-do-frevo.html',
        destination: '/atividades/artes/R9FkpJ7szg5Bq9B3cnDQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/a-minha-bolha-de-dança/a-minha-bolha-de-dança.html',
        destination: '/atividades/artes/GRMHsVGhygFHVcNvxxKl',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/cooperando-em-criacoes-individuais/cooperando-em-criacoes-individuais.html',
        destination: '/atividades/artes/LmeEsDj1NSQC6o6pzZ0y',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/explorando-a-danca-no-espaco/explorando-a-danca-no-espaco.html',
        destination: '/atividades/artes/jCsP7vK2i6ijqrbSRV47',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/os-desafios-de-criar-junto/os-desafios-de-criar-junto.html',
        destination: '/atividades/artes/PWUOTF1tkVlqNN44zn2T',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/a-pesquisa-estetica/a-pesquisa-estetica.html',
        destination: '/atividades/artes/ss7H8elFH1f1zMHgN6ys',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/criando-com-dancas-do-brasil/criando-com-dancas-do-brasil.html',
        destination: '/atividades/artes/urB4DIjKCH0cAd4QZEO8',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/expressividade-na-danca/expressividade-na-danca.html',
        destination: '/atividades/artes/DInjzn23YRysUxAOdyuc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/os-sons-das-historias/os-sons-das-historias.html',
        destination: '/atividades/artes/A8SRyWf6PhW1tXvn3O8Q',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/pia-do-mutum/pia-do-mutum.html',
        destination: '/atividades/artes/OYLZxaNDGteeSTltaxIE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/historia-com-som/historia-com-som.html',
        destination: '/atividades/artes/Ll8wZsGTDF7rqj9Lj59c',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/da-imaginacao-a-sonoridade/da-imaginacao-a-sonoridade.html',
        destination: '/atividades/artes/Eih0Bpi9zx0BmJ9PWljs',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/arte-no-espirito-do-tempo/arte-no-espirito-do-tempo.html',
        destination: '/atividades/artes/qNpiCzxMhReWHFztjDSM',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-1/atd-arts-1.html',
        destination: '/atividades/artes/apuIhYvsfFNnn7V4bzhx',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/descobrindo-a-musica/descobrindo-a-musica.html',
        destination: '/atividades/artes/2LrBfabAmEO1nE7LAMJG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/musica-para-que/musica-para-que.html',
        destination: '/atividades/artes/lrrL2ezKx1DQeIXtOpeG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/processos-colaborativos-criando-junto/processos-colaborativos-criando-junto.html',
        destination: '/atividades/artes/qWzQTjYEybtOKS8iXapH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/que-musica-e-essa/que-musica-e-essa.html',
        destination: '/atividades/artes/CF3zxXB8nUUOfgeT3zxq',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/nasce-um-movimento-nosso-manifesto/nasce-um-movimento-nosso-manifesto.html',
        destination: '/atividades/artes/xmHJpDmHpZO36o5LL4C5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/descobrindo-o-carimbo/descobrindo-o-carimbo.html',
        destination: '/atividades/artes/IHlf9rcbl99MPygCxo07',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-2/atd-arts-2.html',
        destination: '/atividades/artes/hyZZAzN1BSl4qTjyXZER',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-3/atd-arts-3.html',
        destination: '/atividades/artes/4KlkTm5BwmQCr0NQfaAe',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/descobrindo-o-jongo/descobrindo-o-jongo.html',
        destination: '/atividades/artes/2KHtSChJiogJwtFndtjc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/niveis-da-danca/niveis-da-danca.html',
        destination: '/atividades/artes/cSJspvrZdsmuVgmZpvwT',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/um-movimento-vivo/um-movimento-vivo.html',
        destination: '/atividades/artes/jE2j5nlEALgw8JYHrMHn',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/nosso-projeto-coletivo/nosso-projeto-coletivo.html',
        destination: '/atividades/artes/sxr5QQPO0Au0pYFCX2yh',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/descobrindo-o-siriri/descobrindo-o-siriri.html',
        destination: '/atividades/artes/Of1v9IveeiZMOJckGjEf',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/artes/pagdow/atd-arts-4/atd-arts-4.html',
        destination: '/atividades/artes/L4yaKuXyMYi6JMIb8DfS',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/areas-verdes-urbanas/areas-verdes-urbanas.html',
        destination: '/atividades/biologia/wQtwsk67OOn4ZNUMJ2wV',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-6/atd-arts-6.html',
        destination: '/atividades/biologia/7Y7cl44xyLkeEZTuO1kQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/efeito-estufa-manutencao-da-vida/efeito-estufa-manutencao-da-vida.html',
        destination: '/atividades/biologia/ruzgO0QBWQKHklGXKC3Q',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/metabolismo-energetico-fotossintese/metabolismo-energetico-fotossintese.html',
        destination: '/atividades/biologia/2qUddKaWMi7Mo1ueHdvG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-1/atd-arts-1.html',
        destination: '/atividades/biologia/mDmCmQFDTm0RGbLWdLBN',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/aula-desafio-o-caso-do-virus-machupo/aula-desafio-o-caso-do-virus-machupo.html',
        destination: '/atividades/biologia/9hjSxZvQrDIfgNENldHi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/efeito-estufa-manutencao-da-vida-2/efeito-estufa-manutencao-da-vida-2.html',
        destination: '/atividades/biologia/IUJuh86mIQA113eT3OtQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/metabolismo-energetico-respiracao-celular/metabolismo-energetico-respiracao-celular.html',
        destination: '/atividades/biologia/WagwFsP2ECUCNkNAQiTD',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-2/atd-arts-2.html',
        destination: '/atividades/biologia/M7ajQJcxtHtpEks1ER2M',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/aula-desafio-o-que-esta-aquecendo-nosso-planeta/aula-desafio-o-que-esta-aquecendo-nosso-planeta',
        destination: '/atividades/biologia/9xGalFj5ZqHlsftsn3c7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/eventos-climaticos-extremos/eventos-climaticos-extremos.html',
        destination: '/atividades/biologia/3w704CHu3f5OAdsSXZDQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/polinizacao-e-controle-biologico/polinizacao-e-controle-biologico.html',
        destination: '/atividades/biologia/dvdIKH14zk8py8PINCky',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-3/atd-arts-3.html',
        destination: '/atividades/biologia/2XO9AxkCopl4bxCeIqvI',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/bioacumulacao/bioacumulacao.html',
        destination: '/atividades/biologia/RkQt9iKVd6XFsSZGQIhP',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/fotossintese-e-respiracao-celular/fotossintese-e-respiracao-celular.html',
        destination: '/atividades/biologia/YlL7Dhlv59I9187Eth04',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/praticando-fotossintese/praticando-fotossintese.html',
        destination: '/atividades/biologia/5uuqr47fq3uVyc881QDf',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-4/atd-arts-4.html',
        destination: '/atividades/biologia/rqj4HmNj7vlKnxh8l6LH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/defensivos-agricolas/defensivos-agricolas.html',
        destination: '/atividades/biologia/QFJVc3IxVpHLoabpBY5Q',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/matriz-energetica-fontes-nao-renovaveis/matriz-energetica-fontes-nao-renovaveis.html',
        destination: '/atividades/biologia/zQeJU2zbExjtZnyzjgI5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/preservacao-e-conservacao/preservacao-e-conservacao.html',
        destination: '/atividades/biologia/FAKRuzdarwppqePA8RXW',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/atd-bio-5/atd-arts-5.html',
        destination: '/atividades/biologia/8E8oiijOFLWs9SU2IlSA',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/educacao-para-reducao-de-riscos-e-desastres/educacao-para-reducao-de-riscos-e-desastres.html',
        destination: '/atividades/biologia/XFWIA5VE5MazRpZndJ4S',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/matriz-energetica-fontes-renovaveis/matriz-energetica-fontes-renovaveis.html',
        destination: '/atividades/biologia/kQtajnYI2Pu8fkVbsal7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/biologia/pagdow/unidades-de-conservacao/unidades-de-conservacao.html',
        destination: '/atividades/biologia/QLjI4Fcs6ORrWila4mJx',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/a-chegada-da-noite!/a-chegada-da-noite!.html',
        destination: '/atividades/ciencias/XReGWR8dp29tPFuPRwii',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-2/atd-arts-2',
        destination: '/atividades/ciencias/bgUm0qNYDnAqYY1gZwXQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-8/atividade_adaptada_de_ciencias',
        destination: '/atividades/ciencias/a869tf2XM2MbccOs3ux8',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/o-dia-e-nossas-atividades!/o-dia-e-nossas-atividades!.html',
        destination: '/atividades/ciencias/feT08oSZqMJ2PcbXx4PD',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/o-período-da-noite/o-período-da-noite.html',
        destination: '/atividades/ciencias/POaEJUTUDSFR9aqZllqd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-9/atividade_adaptada_de_ciencias',
        destination: '/atividades/ciencias/yxxxOmlbO9dWdFYxLAsB',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-3/atd-arts-3',
        destination: '/atividades/ciencias/fpgslzC0zKc8VkzXcwWX',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/a-origem-de-tudo-do-big-bang-aos-planetas/a-origem-de-tudo-do-big-bang-aos-planetas.html',
        destination: '/atividades/ciencias/JnjDd52NmMkmbie7vbOj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/animais-de-hábitos-diurnos/animais-de-hábitos-diurnos.html',
        destination: '/atividades/ciencias/3unb7JtIuoMADwDnRsqU',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-4/atd-arts-4',
        destination: '/atividades/ciencias/QLBDFfMTlbY8SowA94G7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atividades-diurnas/atividades-diurnas.html',
        destination: '/atividades/ciencias/I8VkSb0fktRtsKCFNSnR',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/os-sete-dias-da-semana!/os-sete-dias-da-semana!.html',
        destination: '/atividades/ciencias/LsCmiKowqbDoq3foJW30',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/tempo-geologico/tempo-geologico.html',
        destination: '/atividades/ciencias/1V0bD4quT0okNOisgsN3',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/expedicao-sistema-solar/expedicao-sistema-solar.html',
        destination: '/atividades/ciencias/eMaOykwFQMChtNUdfoEI',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-5/atd-arts-5',
        destination: '/atividades/ciencias/COYBJ8TAGjtcpei8S8wK',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/animais-de-hábitos-noturnos/animais-de-hábitos-noturnos.html',
        destination: '/atividades/ciencias/86Uwa8Ul763vBpoaTmLL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-1/atd-arts-1',
        destination: '/atividades/ciencias/Pt5Xjk3uaqwUuw9pFbVI',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-6/atd-arts-6',
        destination: '/atividades/ciencias/ltCsSsKqGYq3gaqDiuoQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/gravidade/gravidade.html',
        destination: '/atividades/ciencias/dc3WDRaJ1pX3bYSkWAy1',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/tempo-historico-×-tempo-geologico-×-tempo-cronologico/tempo-historico-×-tempo-geologico-×-tempo-cronologico.html',
        destination: '/atividades/ciencias/4mbeIURQZBpG1atJthmU',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/terra-primitiva-formacao-do-planeta-terra/terra-primitiva-formacao-do-planeta-terra.html',
        destination: '/atividades/ciencias/WzxBrLhK2pOu6J2vfBW5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/nosso-tempo-dias,-meses-e-anos/nosso-tempo-dias,-meses-e-anos.html',
        destination: '/atividades/ciencias/8w0o2MYBD15HC35FZ7cu',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-7/atividade_adaptada_de_ciencias',
        destination: '/atividades/ciencias/bsDPqljhKE1dv2HNy4Pu',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ciencias/pagdow/atd-cie-10/atividade_adaptada_de_ciencias',
        destination: '/atividades/ciencias/WucHA8jk5zlvgMAPphLe',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-1/desenho-para-pintar-barcos-relaxantes.html',
        destination: '/atividades/desenhos/7Kbng6fPz4VsBMVK8nfe',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-17/atd-arts-17.html',
        destination: '/atividades/desenhos/vc9L51rLZrjbC5oFjXnx',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-8/atd-arts-8.html',
        destination: '/atividades/desenhos/81Zafw1dDOoNhUCVgfW0',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-na-cidade/desenho-infantil-coelho-na-cidade.html',
        destination: '/atividades/desenhos/9Kure4rhQpBvNiplOxy7',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-10/atd-arts-10.html',
        destination: '/atividades/desenhos/tLogM05ApNWB0rSyQ7Va',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-18/atd-arts-18.html',
        destination: '/atividades/desenhos/WL0Coytml7KEQ6hsPuSc',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-9/atd-arts-9.html',
        destination: '/atividades/desenhos/08ovdlnUyV5vDohBL5xd',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-no-safari/desenho-infantil-coelho-no-safari.html',
        destination: '/atividades/desenhos/7OSdIlL6CIgejgvl5T02',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-11/atd-arts-11.html',
        destination: '/atividades/desenhos/RrCcuFWyYtr8u6GNmUDA',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-2/desenho-para-pintar-vila-relachante.html',
        destination: '/atividades/desenhos/IfrVbW71M3UbKTgHd5Le',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-casal-de-coelho/desenho-infantil-casal-de-coelho.html',
        destination: '/atividades/desenhos/5b740EpvBgXaW87B03ty',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-tomando-cha/desenho-infantil-coelho-tomando-cha.html',
        destination: '/atividades/desenhos/fZoIHhQvbsys1hz4gack',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-12/atd-arts-12.html',
        destination: '/atividades/desenhos/IydRfmTGwhxuT6TLf6NF',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-3/desenho-para-pintar-mundo-encantado.html',
        destination: '/atividades/desenhos/iQ0Jr8QeWdQ2ZT5b06nw',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelhos-na-pscina/desenho-infantil-coelhos-na-pscina.html',
        destination: '/atividades/desenhos/A1X2lIU8ehiu9adFb957',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-detetive/desenho-infantil-coelho-detetive.html',
        destination: '/atividades/desenhos/LoAhGi3s4gqRI46cot0O',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-13/atd-arts-13.html',
        destination: '/atividades/desenhos/EnmDhdnrqPgj51EMwV2m',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-4/desenho-para-pintar-cachorrinhos-no-espaco.html',
        destination: '/atividades/desenhos/ZQrN03BZSlf5VSnTlbHH',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-em-parque-japones/desenho-infantil-coelho-em-parque-japones.html',
        destination: '/atividades/desenhos/nlJbCAZDFSFoqPRY1uOd',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-gatinho-lendo/desenho-infantil-gatinho-lendo.html',
        destination: '/atividades/desenhos/qXQYGfPxXA5Dwj5xUCmc',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-14/atd-arts-14.html',
        destination: '/atividades/desenhos/3sawrrOBFHXbq7ucPNTd',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-5/desenho-para-pintar-gatinho-no-oceano.html',
        destination: '/atividades/desenhos/8irA4QHqeK5Yve2h90wX',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-investigador/desenho-infantil-coelho-investigador.html',
        destination: '/atividades/desenhos/YjEonswvmscsGfW5Md82',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-tomando-cha-com-amigo/desenho-infantil-tomando-cha-com-amigo.html',
        destination: '/atividades/desenhos/O8qldbJndGkDtCd06sbp',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-15/atd-arts-15.html',
        destination: '/atividades/desenhos/c2P48yyewDSINQWaAwpp',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-6/desenho-para-pintar-coelho-fazendo-bolo.html',
        destination: '/atividades/desenhos/QOi0l2knaR7uySJqHF46',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-jardineiro/desenho-infantil-coelho-jardineiro.html',
        destination: '/atividades/desenhos/LhGNytQSD1osv9zCAqyD',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil_coelho-tocando-guitarra/desenho-infantil_coelho-tocando-guitarra.html',
        destination: '/atividades/desenhos/N5U9oCQ0WHfz8n5oy2W5',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-16/atd-arts-16.html',
        destination: '/atividades/desenhos/Zo27KZzg7Pk1ROvOaOZK',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/atd-pint-7/atd-arts-7.html',
        destination: '/atividades/desenhos/dQR6fp88CC5E3DyBdHMR',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho-infantil-coelho-limpando-neve/desenho-infantil-coelho-limpando-neve.html',
        destination: '/atividades/desenhos/Iuwi6ZWpZO0hVs7UkFgl',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/2-pintura/pagina-de-download/desenho_infantil_coelho_comprando_vestido/desenho_infantil_coelho_comprando_vestido.html',
        destination: '/atividades/desenhos/GxHEN5pOzGJCjNTU0woU',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/velocidade-estafetas-e-inclusao/velocidade-estafetas-e-inclusao.html',
        destination: '/atividades/educacao-fisica/iofRSEU6liL7hF4kyKGA',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atletismo-olimpico-e-paralimpico/atletismo-olimpico-e-paralimpico.html',
        destination: '/atividades/educacao-fisica/lwOC1XBamwb2eFl7sGKL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-1/atd-arts-1.html',
        destination: '/atividades/educacao-fisica/oOt2Ai4JVdZsDv38hcSp',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-4/atd-arts-4.html',
        destination: '/atividades/educacao-fisica/Jyeu7HUZPatFWVUo8ePQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-5/atd-arts-5.html',
        destination: '/atividades/educacao-fisica/OlxvSeNPQuFZQWTzFKw2',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-2/atd-arts-2.html',
        destination: '/atividades/educacao-fisica/L1tBF5p1QknrdznPQg3h',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/andebol-em-acao/andebol-em-acao.html',
        destination: '/atividades/educacao-fisica/tG4eHO6URg6lzYMN9Dhd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/da-queimada-para-o-handebol/da-queimada-para-o-handebol.html',
        destination: '/atividades/educacao-fisica/z9C772ofSqxvJzuL65wc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-3/atd-arts-3.html',
        destination: '/atividades/educacao-fisica/0RvN86veJX9kNMWKbLnU',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-fisica/pagdow/atd-edu-6/atd-arts-6.html',
        destination: '/atividades/educacao-fisica/a1SAiZDvZ7xwiSGgDLiF',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/desafio-da-vida-financeira/desafio-da-vida-financeira.html',
        destination: '/atividades/educacao-financeira/PAKsUQv1UJgl1s9v4ZMH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/renda-e-trabalho/renda-e-trabalho.html',
        destination: '/atividades/educacao-financeira/RgXNVNDbKjLn7cICKLHx',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-9/atividade_adaptada_educacao_financeira.html',
        destination: '/atividades/educacao-financeira/GZA654C2siBLGtr2PMtb',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-3/atd-arts-3.html',
        destination: '/atividades/educacao-financeira/B3ZlUhOyar54YRJSTi5R',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-4/atd-arts-4.html',
        destination: '/atividades/educacao-financeira/gbUGvW0KyoxKTLp4E0s4',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-10/atividade_adaptada_educacao_financeira.html',
        destination: '/atividades/educacao-financeira/Cr8iGj3jpwAJrpy8Ols6',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/renda-e-trabalho-2/renda-e-trabalho-2.html',
        destination: '/atividades/educacao-financeira/QhjckDCodRw8LJZQOLpI',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/introducao-a-educacao-financeira/introducao-a-educacao-financeira.html',
        destination: '/atividades/educacao-financeira/1b4qyLWLsGR9XKlOfO9L',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/orcamento-pessoal-basico/orcamento-pessoal-basico.html',
        destination: '/atividades/educacao-financeira/Z3GeuhbYZBQRmSv22yqG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/renda-e-trabalho-3/renda-e-trabalho-3.html',
        destination: '/atividades/educacao-financeira/A5YJE7NvtN78POh2bh8S',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-11/atividade_adaptada_educacao_financeira.html',
        destination: '/atividades/educacao-financeira/Kjp54aRU8KrDnIO1B5bO',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-5/atd-arts-5.html',
        destination: '/atividades/educacao-financeira/wsSXkJukX996icRClr6o',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-6/atd-arts-6.html',
        destination: '/atividades/educacao-financeira/gUrnH3cY1U0xtfbcfYCz',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-12/atividade_adaptada_educacao_financeira.html',
        destination: '/atividades/educacao-financeira/0gxzxkTOD7DmCeqQtKkq',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/sistema-financeiro-nacional/sistema-financeiro-nacional.html',
        destination: '/atividades/educacao-financeira/FVd5d7IReIidkUFmY85b',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/orcamento-pessoal-basico-2/orcamento-pessoal-basico-2.html',
        destination: '/atividades/educacao-financeira/hOlEQLTW9yv3XQPSNxYs',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/panorama-da-educacao-financeira/panorama-da-educacao-financeira.html',
        destination: '/atividades/educacao-financeira/9LGfyI4tB55Ugy9aMcfL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/sistema-financeiro-nacional-2/sistema-financeiro-nacional-2',
        destination: '/atividades/educacao-financeira/K2Dyjql5sej6uDszmhZr',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-1/atd-arts-1.html',
        destination: '/atividades/educacao-financeira/Nh04K85cQ98mYZif6yUC',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-7/atd-arts-7.html',
        destination: '/atividades/educacao-financeira/lbVSoupCSaEbYW0J2CSm',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-8/atd-arts-8.html',
        destination: '/atividades/educacao-financeira/wcKgd5XAobyj5D8XQR0p',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/educacao-financeira/pagdow/atd-edfin-2/atd-arts-2.html',
        destination: '/atividades/educacao-financeira/mX7ruKxBssEUEJCax7Ta',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/1-lei-da-termodinamica-exercicios-propostos/1-lei-da-termodinamica-exercicios-propostos.html',
        destination: '/atividades/fisica/yq70ZoWwvqsFCuJ7jxzH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-6/atd-arts-6.html',
        destination: '/atividades/fisica/LiztP6wrwPGgXts6Kjy0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/do-watt-ao-real-potencia-consumo-e-custo-na-energia-eletrica/do-watt-ao-real-potencia-consumo-e-custo-na-energia-eletrica.html',
        destination: '/atividades/fisica/jMKCIEfelrWVAr4spmAL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimento-circular-uniforme-entre-rotacoes-e-transmissoes/movimento-circular-uniforme-entre-rotacoes-e-transmissoes.html',
        destination: '/atividades/fisica/FL0aWdCQQ7ibFneYF7oX',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/no-toque-ou-a-distancia-como-as-forcas-se-manifestam/no-toque-ou-a-distancia-como-as-forcas-se-manifestam.html',
        destination: '/atividades/fisica/NEOojjtQ0TVudRJQSIut',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/operacoes-com-vetores-na-fisica/operacoes-com-vetores-na-fisica.html',
        destination: '/atividades/fisica/6ikgVHjN9g6aR9R5BbCC',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimento-circular-uniforme-hora-de-resolver-problemas/movimento-circular-uniforme-hora-de-resolver-problemas.html',
        destination: '/atividades/fisica/xi3P61BNs2QZLadhwNqV',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/entre-o-linear-e-o-nao-linear/entre-o-linear-e-o-nao-linear.html',
        destination: '/atividades/fisica/MZRvGHzT5SHFFiLr3vsc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/calores-especificos-dos-gases-perfeitos/calores-especificos-dos-gases-perfeitos.html',
        destination: '/atividades/fisica/nGKvyUUd0RoeLVyms0Di',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/a-conservacao-da-energia-primeira-lei-da-termodinamica/a-conservacao-da-energia-primeira-lei-da-termodinamica.html',
        destination: '/atividades/fisica/SYI2MZoWkioeQOfqbp9J',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/a-simplicidade-da-funcao-horaria-do-mru/a-simplicidade-da-funcao-horaria-do-mru.html',
        destination: '/atividades/fisica/a1MlKtrydtQMGtk576T7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/ciclos-termodinamicos/ciclos-termodinamicos.html',
        destination: '/atividades/fisica/nVad2vANLQIWPj5iWGcd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/equacoes-do-mruv-alem-da-velocidade-constante/equacoes-do-mruv-alem-da-velocidade-constante.html',
        destination: '/atividades/fisica/0QtnUuhImiMHWeD21yxa',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimento-e-repouso-tudo-e-uma-questao-de-referencial/movimento-e-repouso-tudo-e-uma-questao-de-referencial.html',
        destination: '/atividades/fisica/Dk72JiT8RabtPEPBAmOr',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/processos-termodinamicos-particulares/processos-termodinamicos-particulares.html',
        destination: '/atividades/fisica/WVynalvYbLdotKcmaw1C',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/quando-escorregar-nao-e-uma-opcao-o-papel-do-atrito-estatico/quando-escorregar-nao-e-uma-opcao-o-papel-do-atrito-estatico.html',
        destination: '/atividades/fisica/WxRui969U1IFnvnJPEvM',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimento-uniforme-do-calculo-a-interpretacao/movimento-uniforme-do-calculo-a-interpretacao.html',
        destination: '/atividades/fisica/qaqjFg1vxckxrG1cIAE1',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/forca-e-suas-medidas-entendendo-grandezas-escalares-e-vetoriais/forca-e-suas-medidas-entendendo-grandezas-escalares-e-vetoriais.html',
        destination: '/atividades/fisica/5xoYt80tDnW2l9xUeSdQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/custo-e-consumo-de-energia-eletrica/custo-e-consumo-de-energia-eletrica.html',
        destination: '/atividades/fisica/KbfmEky4cSBkv704QuTZ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-1/atd-arts-1.html',
        destination: '/atividades/fisica/bBDSkRvYKUZ9RFdEYKMh',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-2/atd-arts-2.html',
        destination: '/atividades/fisica/kWZtREypVFzo5oIZE9un',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/da-lei-de-ohm-ao-efeito-joule/da-lei-de-ohm-ao-efeito-joule.html',
        destination: '/atividades/fisica/JB7aZvwT8KByU8APIkbZ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/introducao-a-termodinamica/introducao-a-termodinamica.html',
        destination: '/atividades/fisica/i1DjYmbvki0pveyHLin7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimentos-verticais-da-queda-ao-lan%C3%A7amento/movimentos-verticais-da-queda-ao-lan%C3%A7amento.html',
        destination: '/atividades/fisica/YNsLmf1EaEZVCst55cvE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/segunda-lei-de-newton-quando-a-forca-muda-o-movimento/segunda-lei-de-newton-quando-a-forca-muda-o-movimento.html',
        destination: '/atividades/fisica/bKtwRgNGcVwqwA5j7bka',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/terceira-lei-de-newton-por-que-o-peso-e-a-normal-nao-formam-um-par-de-acao-e-reacao/terceira-lei-de-newton-por-que-o-peso-e-a-normal-nao-formam-um-par-de-acao-e-reacao.html',
        destination: '/atividades/fisica/nIHlbyOTVICvZpAabVAE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/movimentos-verticais-governados-pela-gravidade/movimentos-verticais-governados-pela-gravidade.html',
        destination: '/atividades/fisica/Qt7wgSFjWHjVMXzdxPrV',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/lancamentos-no-plano-alem-da-trajetoria-retilinea/lancamentos-no-plano-alem-da-trajetoria-retilinea.html',
        destination: '/atividades/fisica/tPAMzmEtebLH8aYSGWiS',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/deslizando-sem-atrito-acao-das-forcas-de-contato/deslizando-sem-atrito-acao-das-forcas-de-contato.html',
        destination: '/atividades/fisica/5yXpUkevBVu9wD3NBdlx',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-3/atd-arts-3.html',
        destination: '/atividades/fisica/ffdpcJM2P0Il14aQrCAm',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-4/atd-arts-4.html',
        destination: '/atividades/fisica/k6gGhrvWY5FmC6MgwKGf',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/do-real-ao-convencional-entendendo-o-sentido-da-corrente-eletrica/do-real-ao-convencional-entendendo-o-sentido-da-corrente-eletrica.html',
        destination: '/atividades/fisica/w2czBgH18CAYx5FYOvJ2',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/menos-forca-mais-distancia-analisando-as-polias/menos-forca-mais-distancia-analisando-as-polias.html',
        destination: '/atividades/fisica/YOtsAzVOrtJMvQnwZfrL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/mruv-da-teoria-a-pratica-de-resolucao-de-problemas/mruv-da-teoria-a-pratica-de-resolucao-de-problemas.html',
        destination: '/atividades/fisica/EujO3iWP0c1e7DzFpNPL',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/um-so-caminho-para-a-corrente-entendendo-resistores-em-serie/um-so-caminho-para-a-corrente-entendendo-resistores-em-serie.html',
        destination: '/atividades/fisica/xfuaALwzEUOdbmUCJfP5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/fisica/pagdow/atd-fisi-5/atd-arts-5.html',
        destination: '/atividades/fisica/bhRFwk4fQRqiVd6SW5oi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/a-arte-em-dialogo-com-o-mundo-contemporaneo/a-arte-em-dialogo-com-o-mundo-contemporaneo.html',
        destination: '/atividades/filosofia/yMCcudgxaPDgWmChpUro',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atd-filo-2/atd-arts-2.html',
        destination: '/atividades/filosofia/fmSe897f515Zki1XfemK',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/breves-consideracoes-sobre-a-reflexao-estetica/breves-consideracoes-sobre-a-reflexao-estetica.html',
        destination: '/atividades/filosofia/Sps7p5wnL5pxv6sjY0Nt',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/mito-e-filosofia/mito-e-filosofia.html',
        destination: '/atividades/filosofia/sYRpilxHUYjH0x8D2IIi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/o-belo-o-feio-e-o-gosto/o-belo-o-feio-e-o-gosto.html',
        destination: '/atividades/filosofia/NCHZroRa2OogztieOuy2',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/campos-de-investigacao-da-filosofia/campos-de-investigacao-da-filosofia.html',
        destination: '/atividades/filosofia/0UcsbFuJMkfcDxDLe03A',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/a-arte-pode-motivar-a-reflexao-filosofica/a-arte-pode-motivar-a-reflexao-filosofica.html',
        destination: '/atividades/filosofia/c24ooPVQPBzPKczQScIt',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/a-atitude-critica-ponto-comum-entre-a-reflexao-filosofica-e-a-reflexao-estetica/a-atitude-critica-ponto-comum-entre-a-reflexao-filosofica-e-a-reflexao-estetica.html',
        destination: '/atividades/filosofia/KGVI84OgCd6VtyOYlgLq',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atd-filo-4/atd-arts-4.html',
        destination: '/atividades/filosofia/Ju59enYMvU7N6NlHtWFR',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/contribuicoes-do-pensamento-filosofico-para-a-analise-da-violencia/contribuicoes-do-pensamento-filosofico-para-a-analise-da-violencia.html',
        destination: '/atividades/filosofia/8XLAnyfOjwJ6aldtSIKy',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/o-olhar-do-outro-nas-relacoes-intergeracionais/o-olhar-do-outro-nas-relacoes-intergeracionais.html',
        destination: '/atividades/filosofia/y9mlfqXG3Pvc7i7fqdwD',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/origens-da-filosofia/origens-da-filosofia.html',
        destination: '/atividades/filosofia/RSq8wSEcfK7b4V3yXYEX',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/desafios-eticos-nas-relacoes-intergeracionais/desafios-eticos-nas-relacoes-intergeracionais.html',
        destination: '/atividades/filosofia/VLsanJaWb7NX8t5eLV8o',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atd-filo-5/atd-arts-5.html',
        destination: '/atividades/filosofia/covT0QdJ4BFTeCa4bg3p',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/a-atitude-filosofica-a-analise-dos-argumentos/a-atitude-filosofica-a-analise-dos-argumentos.html',
        destination: '/atividades/filosofia/muJaAgVkBBUepVcVx3XA',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/a-ideia-de-dignidade-humana-como-principio-fundamental-dos-direitos-humanos/a-ideia-de-dignidade-humana-como-principio-fundamental-dos-direitos-humanos.html',
        destination: '/atividades/filosofia/weLbpXwVB6grR7476HBo',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atd-filo-6/atd-arts-6.html',
        destination: '/atividades/filosofia/Mj0ZVcJ3v7LDGv9CP8wy',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/dialogo-e-responsabilidade-entre-geracoes/dialogo-e-responsabilidade-entre-geracoes.html',
        destination: '/atividades/filosofia/Xdp4xmv7Mt8a0dhBHsXi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/periodos-da-historia-da-filosofia/periodos-da-historia-da-filosofia.html',
        destination: '/atividades/filosofia/waoDI2ygRX8IpvRB6wHU',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/por-que-filosofia/por-que-filosofia.html',
        destination: '/atividades/filosofia/d6wbKs0MdbC96kaHPcXm',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/escola-de-atenas/escola-de-atenas.html',
        destination: '/atividades/filosofia/AbT7M8QUAUQOxGLghxY0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atitude-filosofica-a-exigencia-pela-argumentacao/atitude-filosofica-a-exigencia-pela-argumentacao.html',
        destination: '/atividades/filosofia/VVfhPd99pm7dRTZA8ZCG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/analise-critica-de-obra-de-arte/analise-critica-de-obra-de-arte.html',
        destination: '/atividades/filosofia/OK40WxApOoYWxlHaNl7x',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/atd-filo-1/atd-arts-1.html',
        destination: '/atividades/filosofia/nOiqnEldzxN7q8qBQnIP',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/filosofia/pagdow/aula-desafio-campanha-relacoes-intergeracionais/aula-desafio-campanha-relacoes-intergeracionais.html',
        destination: '/atividades/filosofia/sjzYfwnQinFRBe0NfxY5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/a-expansao-da-urbanizacao-no-brasil-ao-longo-dos-seculos/a-expansao-da-urbanizacao-no-brasil-ao-longo-dos-seculos.html',
        destination: '/atividades/geografia/iUClEZiFJFYGjUEruNQr',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/cartografia-tatil/cartografia-tatil.html',
        destination: '/atividades/geografia/OZ4fPhTtKBePt5AYiQSt',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/gestao-sustentavel-dos-recursos-hidricos/gestao-sustentavel-dos-recursos-hidricos.html',
        destination: '/atividades/geografia/VRf2MgRHrJnnfjYNl96B',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/relevo/relevo.html',
        destination: '/atividades/geografia/PYel7GGxa80s7YCuVIBM',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/relevo-e-ocupacao-humana/relevo-e-ocupacao-humana.html',
        destination: '/atividades/geografia/yaJZ8NvnnB0868Bd81eh',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/impactos-socioambientais-da-urbanizacao/impactos-socioambientais-da-urbanizacao.html',
        destination: '/atividades/geografia/BRikci5K7qbHxzfNLHhz',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/climatologia-e-meteorologia/climatologia-e-meteorologia.html',
        destination: '/atividades/geografia/CWH2uzxjRV1HAGWFbGRq',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-1/atd-arts-1.html',
        destination: '/atividades/geografia/jqrZAIcW3L1UUqUf7X5S',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-2/atd-arts-2.html',
        destination: '/atividades/geografia/KRhQkhPZu2tIpmmS5pR0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/climograma/climograma.html',
        destination: '/atividades/geografia/ZGausT3wKrNciD1iPvJR',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/mapas-qualitativos-e-quantitativos/mapas-qualitativos-e-quantitativos.html',
        destination: '/atividades/geografia/y6TL1Ql12JFcbugNDVl8',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/riscos-geologicos/riscos-geologicos.html',
        destination: '/atividades/geografia/S3PYBtdvuWEccfGlvCnG',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/sensoriamento-remoto/sensoriamento-remoto.html',
        destination: '/atividades/geografia/FqrGxbnozgei2K1EgAz7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/prevencao-e-mitigacao-de-impactos/prevencao-e-mitigacao-de-impactos.html',
        destination: '/atividades/geografia/9rA1gk1ooHTxVoA6a5ld',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/desafios-contemporaneos-das-cidades/desafios-contemporaneos-das-cidades.html',
        destination: '/atividades/geografia/sDOFMmfEYo2NV712bQRJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-3/atd-arts-3.html',
        destination: '/atividades/geografia/i9QpA8c9dSnsa3jfl5vW',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-4/atd-arts-4.html',
        destination: '/atividades/geografia/g4e9Kc7uye0TP4inh0do',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/detetive-do-lugar/detetive-do-lugar.html',
        destination: '/atividades/geografia/KeUnGffEFmvK4hKVKjOu',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/principais-biomas-do-planeta-terra/principais-biomas-do-planeta-terra.html',
        destination: '/atividades/geografia/V3XjGbAkQdBTbQ0Zc7tn',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/sistema-de-informacoes-geograficas/sistema-de-informacoes-geograficas.html',
        destination: '/atividades/geografia/v5MKz4Yr9ehREpVb9RpH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/sistema-nacional-de-unidades-de-conservacao-da-natureza/sistema-nacional-de-unidades-de-conservacao-da-natureza.html',
        destination: '/atividades/geografia/qhnKAEr9PM8WEMntJaps',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/principais-elementos-dos-mapas/principais-elementos-dos-mapas.html',
        destination: '/atividades/geografia/nV0eLgamUH6Rx5gIKsSO',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/elaboracao-de-climogramas/elaboracao-de-climogramas.html',
        destination: '/atividades/geografia/dC7zRK0pHFkKwTwe7hXi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-5/atd-arts-5.html',
        destination: '/atividades/geografia/FtooFqSlzeGhfsJjAVkk',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atd-geo-6/atd-arts-6.html',
        destination: '/atividades/geografia/PAiLafModrQDE7AsV42M',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/elaboracao-de-mapas-tateis/elaboracao-de-mapas-tateis.html',
        destination: '/atividades/geografia/JdVquddTxOjWEqBzi4D0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/problemas-urbanos-e-desigualdades-socioespaciais/problemas-urbanos-e-desigualdades-socioespaciais.html',
        destination: '/atividades/geografia/0XDRslUIQeU78W0KlNfg',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/urbanizacao-acelerada/urbanizacao-acelerada.html',
        destination: '/atividades/geografia/kHxrpjItHINV8zSpmKOt',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/urbanizacao-mundial/urbanizacao-mundial.html',
        destination: '/atividades/geografia/Xy56DxdJ0Y4353KnUVDb',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/recursos-hidricos/recursos-hidricos.html',
        destination: '/atividades/geografia/tDLNvnOcoGv7L4ajnPqZ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/elementos-e-controles-climaticos/elementos-e-controles-climaticos.html',
        destination: '/atividades/geografia/q7IGVQ6v7KiFREFhWnI0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/atmosfera/atmosfera.html',
        destination: '/atividades/geografia/TnSBA2BZLrqf5ucx0p2w',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/geografia/pagdow/biomas-do-estado-de-sao-paulo/biomas-do-estado-de-sao-paulo.html',
        destination: '/atividades/geografia/DnNItAVKFWEkqMLpTdRF',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/a-minha-historia/a-minha-historia.html',
        destination: '/atividades/historia/q3MnNkwXRwKeHlTrs4dx',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-2/atd-arts-2.html',
        destination: '/atividades/historia/4u9gociaqvew0liptAJQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/bandeirantes-e-jesuitas/bandeirantes-e-jesuitas.html',
        destination: '/atividades/historia/Yi0jB0EH0TTKxaNCsMp3',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/quem-sou-eu/quem-sou-eu.html',
        destination: '/atividades/historia/T8BzbYpW8FRBz3pnfRIj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/quem-sou-eu-meu-nome!/quem-sou-eu-meu-nome!.html',
        destination: '/atividades/historia/bLTzXFJ8IfU0mUlVgNLZ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/de-onde-vem-a-minha-historia/de-onde-vem-a-minha-historia.html',
        destination: '/atividades/historia/L8oevmvBwFOm4naVibQD',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-3/atd-arts-3.html',
        destination: '/atividades/historia/POcSVz0RRXYcC3nT2DtD',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/amizade-e-convivencia/amizade-e-convivencia.html',
        destination: '/atividades/historia/QFARmepDv290yZ3ZvVwd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/as-fases-da-nossa-vida/as-fases-da-nossa-vida.html',
        destination: '/atividades/historia/IP0e9X8RuQlk9r8XJxAN',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-4/atd-arts-4.html',
        destination: '/atividades/historia/3UY6UsBZhK8baOB3e6LJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/o-lugar-onde-vivo/o-lugar-onde-vivo.html',
        destination: '/atividades/historia/mqEVR7AMHpHxNlPgy96Y',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/vamos-viver-em-paz!/vamos-viver-em-paz!.html',
        destination: '/atividades/historia/dRJ02IPdyPTesSdjIbz8',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/cidades-estados-na-antiguidade-a-politica-e-a-identidade-das-polis-gregas/cidades-estados-na-antiguidade-a-politica-e-a-identidade-das-polis-gregas.html',
        destination: '/atividades/historia/VEbpSSKEEz3G5bnLFhwn',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/os-mapas-contam-historias/os-mapas-contam-historias.html',
        destination: '/atividades/historia/RblK2YCqGV8QdoKl4n9a',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-5/atd-arts-5.html',
        destination: '/atividades/historia/E6oUNihpe6WxVvpBPFQd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-1/atd-arts-1.html',
        destination: '/atividades/historia/xF4bKMN4hnkSxsG4Q9be',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/historia/pagdow/atd-hist-6/atd-arts-6.html',
        destination: '/atividades/historia/LymNwEhA2eJWQuDKAtF1',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-1/atd-arts-1.html',
        destination: '/atividades/ingles/wFZQWbLhivt3cvMuoYBj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-3/atd-arts-3.html',
        destination: '/atividades/ingles/JC94zJ3IohigO5o9Fdm5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-5/atd-arts-5.html',
        destination: '/atividades/ingles/ftBRhlJwyY3yONPFykLp',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-2/atd-arts-2.html',
        destination: '/atividades/ingles/uiNFju7dCucd4k29HoQ5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-4/atd-arts-4.html',
        destination: '/atividades/ingles/ZyG9fTEjywZT2XFnKxxN',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/ingles/pagdow/atd-ing-6/atd-arts-6.html',
        destination: '/atividades/ingles/ETRFEu3C2w1Gpt8DPAU5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/a-descoberta-do-fosforo-e-a-organizacao-dos-elementos/a-descoberta-do-fosforo-e-a-organizacao-dos-elementos.html',
        destination: '/atividades/quimica/HQTQlbGp4DktiqEmA1ZB',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-4/atd-arts-4.html',
        destination: '/atividades/quimica/Is18r4rgrbimpKUIf8Xh',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/como-os-atomos-formam-as-substancias/como-os-atomos-formam-as-substancias.html',
        destination: '/atividades/quimica/C5AdgcVUbYvl9CEgyLKm',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/modelo-de-bohr-e-modelos-atuais/modelo-de-bohr-e-modelos-atuais.html',
        destination: '/atividades/quimica/v168tNjybJLupLb2tudz',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/para-que-servem-os-modelos/para-que-servem-os-modelos.html',
        destination: '/atividades/quimica/JFq9apUv5V946FknqdKp',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/descobertas-sobre-a-constituicao-da-materia/descobertas-sobre-a-constituicao-da-materia.html',
        destination: '/atividades/quimica/SIMM673LY4PfsqQe1sgk',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-5/atd-arts-5.html',
        destination: '/atividades/quimica/UcdwFFtqTv4HbRMt0OR3',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/a-formacao-do-universo-e-os-elementos-quimicos/a-formacao-do-universo-e-os-elementos-quimicos.html',
        destination: '/atividades/quimica/sz3Du0Z9mYemaUozdlhJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/a-tabela-periodica/a-tabela-periodica.html',
        destination: '/atividades/quimica/zQK1Vxtq7oBvPKOkNf8b',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-6/atd-arts-6.html',
        destination: '/atividades/quimica/XLGJKR8InY95RdMiWkl5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/distribuicao-eletronica/distribuicao-eletronica.html',
        destination: '/atividades/quimica/pFBuHGfItAAj2mwx7NTQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/particulas-atomicas/particulas-atomicas.html',
        destination: '/atividades/quimica/ZmImLrhZeI4fvHBtdKwA',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/producao-de-sal-e-as-ligacoes-ionicas/producao-de-sal-e-as-ligacoes-ionicas.html',
        destination: '/atividades/quimica/ivHtviwBjr6y7Ht2xRYE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/do-que-sao-feitas-as-coisas/do-que-sao-feitas-as-coisas.html',
        destination: '/atividades/quimica/lWiQBPvoFaevpkXnFfVi',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-7/atd-arts-1.html',
        destination: '/atividades/quimica/h8TSAYFYgLwtPkAlPeGc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-1/atd-arts-1.html',
        destination: '/atividades/quimica/wauLa15x7BAh9Vb3e905',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-2/atd-arts-2.html',
        destination: '/atividades/quimica/nGBMwWp4Z7OL7QIPK4JO',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-8/atd-arts-1.html',
        destination: '/atividades/quimica/sTrOEZdZ3GCO8XorUP9I',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/elementos-e-substancias-que-constituem-o-sistema-solar/elementos-e-substancias-que-constituem-o-sistema-solar.html',
        destination: '/atividades/quimica/iPYWHmERf73d8ADwas1O',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/radioisotopos/radioisotopos.html',
        destination: '/atividades/quimica/sH9lMe6UOORaQANsYuFJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-9/atd-arts-1.html',
        destination: '/atividades/quimica/QCBDFG6z81Ca04UThcV5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/quimica/pagdow/atd-qui-3/atd-arts-3.html',
        destination: '/atividades/quimica/DwX9TPpg77PfqWXPsdCb',

        permanent: true,
      },

      {
        source: '/nivel-2/6-livros/livros/fazendo-enem-exatas/fazendo-enem-exatas.html',
        destination: '/atividades/livros/On9Osha4HlcXiCnowm4Q',

        permanent: true,
      },

      {
        source: '/nivel-2/6-livros/livros/fazendo-enem-linguagens/fazendo-enem-linguagens.html',
        destination: '/atividades/livros/pVQA57wJCrWMKPK3EdsW',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/a-barraca-de-comidas/a-barraca-de-comidas.html',
        destination: '/atividades/matematica/8ytgNFElrdIwPnX6PqXn',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-16/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/hkxUMAnu6c63bU1lcD2f',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-7/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/U97yT9DdJd4orojM3QUQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/matematica-reta-numerica/matematica-reta-numerica.html',
        destination: '/atividades/matematica/UwttpnVgTImqVdkSR89B',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/mestre-das-pipas/atividade-mestre-das-pipas.html',
        destination: '/atividades/matematica/gR3DdNJqSwTwIyAe0N7V',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-8/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/2Vg780hweh46Iwah7ztN',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-17/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/EdMKroypu2yipIhB1K36',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/a-batalha-de-likes/a-batalha-de-likes.html',
        destination: '/atividades/matematica/NVdhtz71sFQg47xGWN34',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/a-guerra-das-pizzas/a-guerra-das-pizzas.html',
        destination: '/atividades/matematica/280w9l6MKbusAIYiTIMt',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-18/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/VltXHTrbjGme5a2zsj2l',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-9/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/xewL3ctzgkDuLtz5HZZX',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/mestres-culinarios---o-desafio-das-fracoes/mestres-culinarios---o-desafio-das-fracoes.html',
        destination: '/atividades/matematica/dttYMQMnBG4BUq6vwftv',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/mestres-culinarios---o-desafio-das-fracoes/mestres-culinarios---o-desafio-das-fracoes.html',
        destination: '/atividades/matematica/ts3bTBoJ46iD7ilTfm5A',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/missao-arraia-de-sucesso!/missao-arraia-de-sucesso!.html',
        destination: '/atividades/matematica/7GNymdNA2TrK28B7qBCy',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/cacadores-de-descontos/cacadores-de-descontos.html/nivel-2/2-bncc/matematica/pagdow/cacadores-de-descontos/cacadores-de-descontos.html',
        destination: '/atividades/matematica/ZN4oz0p079N0K1CVbz9W',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-19/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/2lDt3ZZaZwZDj03REOR1',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/a-lojinha-de-brinquedos/a-lojinha-de-brinquedos.html',
        destination: '/atividades/matematica/CPW5xY30QNsWL72M6zpB',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/a-super-fabrica-de-doces/a-super-fabrica-de-doces.html',
        destination: '/atividades/matematica/1eZlrlDwuZOEtxesiea2',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-2/atd-arts-2.html',
        destination: '/atividades/matematica/SbQ4v3NmomN32uD30s9d',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/copiando-desenhos-magicos/copiando-desenhos-magicos.html',
        destination: '/atividades/matematica/xVcouk1vOC1zdJ1Ia0zP',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/montando-a-nossa-casinha/atividade-montando-a-nossa-casinha.html',
        destination: '/atividades/matematica/TM1MBp4FTJAgjs2xluOH',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/montando-minha-pipa-colorida/atividade-montando-minha-pipa-colorida.html',
        destination: '/atividades/matematica/37xqAG3VgR1PmSJd9lAn',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/cruzadinha-de-menos/cruzadinha-atividade-de-matematica-para-imprimir-gratis.html',
        destination: '/atividades/matematica/2GztGx5T9nkZgtB3ZgD0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-20/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/SBRgilyszrsNvqQ3Cl5M',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/arquiteto(a)-de-sonhos/atividade-arquiteto(a)-de-sonhos.html',
        destination: '/atividades/matematica/vsK7ky2zJL5NvCz5y2UO',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-1/atd-arts-1.html',
        destination: '/atividades/matematica/UQvkb07c5783lOkJutcj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-21/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/ZwI5fCwqD4cZyxEjK1hJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/cruzadinha-matematica/4-25.04.25.html',
        destination: '/atividades/matematica/F7lVdujyCgzptVzEKkbA',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/montando-o-mosaico-secreto/montando-o-mosaico-secreto.html',
        destination: '/atividades/matematica/laym9ru6MWLQTAUoRe6g',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/nosso-arraia-divertido!/nosso-arraia-divertido!.html',
        destination: '/atividades/matematica/xopq7NDOcAJPFZUq6SjE',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/defensores-da-amazonia/atividade-de-matematica-defensores-da-amazonia.html',
        destination: '/atividades/matematica/hdGHdTP20dz240uV8OI5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-22/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/HRg4hcTIYVVgXexpUIhW',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-10/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/NwdVoc5ZWkL1lN6UbHgu',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-11/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/DKLRkkY58Stdhi5wfmtc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-23/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/WbM7xHAkub92dQKM7rgM',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/designers-de-pixel-art/designers-de-pixel-art.html',
        destination: '/atividades/matematica/PbZIRngcNYAtzSKwW9ap',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/o-desafio-da-fabrica-de-doces/o-desafio-da-fabrica-de-doces.html',
        destination: '/atividades/matematica/CpIYqS8lP1novVY8CgJl',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/o-enigma-dos-mosaicos-antigos/o-enigma-dos-mosaicos-antigos.html',
        destination: '/atividades/matematica/BbeewdAOzQ1aVtvhZJmd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-3/atd-arts-3.html',
        destination: '/atividades/matematica/tr5u11kkspaNOqQt8Lf7',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-12/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/DKLRkkY58Stdhi5wfmtc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-13/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/tzaN0pu3A9FnMcw7Gd4Q',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-4/atd-arts-4.html',
        destination: '/atividades/matematica/gFS4W2LZZww7yJjKG71d',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/fabrica-de-robos---o-clone-perfeito/fabrica-de-robos---o-clone-perfeito.html',
        destination: '/atividades/matematica/PbaKQjcl21tStXxUbldj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/olimpiada-dos-racionais/olimpiada-dos-racionais.html',
        destination: '/atividades/matematica/ny2IJ51CDSAbeAco3gj9',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/planejando-a-festa-de-aniversario!/planejando-a-festa-de-aniversario!.html',
        destination: '/atividades/matematica/qNCYAoyVKXTGoDxHfXsc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/influenciador-digital/influenciador-digital.html',
        destination: '/atividades/matematica/g3Kfn5ePmnGqOzCutXXc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-5/atd-arts-5.html',
        destination: '/atividades/matematica/Fa96Wt4Z2tHV3NFK2tq4',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-14/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/2jdEHA438JKxkQV2tgxr',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-15/atividade_adaptada_de_matematica.html',
        destination: '/atividades/matematica/FCjebrYtkpEmA8FKVIWd',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/atd-mat-6/atd-arts-6.html',
        destination: '/atividades/matematica/AC8ixOM8tUlh0yOAnXsw',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/jardineiros-da-floresta/atividade-de-matematica-jardineiros-da-floresta.html',
        destination: '/atividades/matematica/yH36JemjNamcMhzMRMY0',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/matematica/pagdow/viagem-de-ferias/viagem-de-ferias.html',
        destination: '/atividades/matematica/TVJvh8JvL2TIfKuOItuP',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/leitura-e-interpretacao-nivel-1/leitura-e-interpretacao-nivel-1.html',
        destination: '/atividades/portugues/yhjqCAqb1fiu26VyG3zY',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/prova-justa-para-todos!/prova-justa-para-todos!.html',
        destination: '/atividades/portugues/W8rYMRzRxIBHFJvhswZc',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/fabrica-de-palavras---fichas/fabrica-de-palavras---fichas.html',
        destination: '/atividades/portugues/KAfPWzyaDVkNGxH38NVz',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/jogo-da-memoria-das-rimas/atividade-jogo-da-memoria-das-rimas.html',
        destination: '/atividades/portugues/Qiy7w99p8wGoGVsIHXAw',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-1/atd-arts-1.html',
        destination: '/atividades/portugues/FCrINyBAxGQLIR42lB7D',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/nossos-direitos-magicos/nossos-direitos-magicos.html',
        destination: '/atividades/portugues/57Yb61PzQpfHuqsnoMRB',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/missao-tradutores-reais-de-lilliput/missao-tradutores-reais-de-lilliput.html',
        destination: '/atividades/portugues/IKVkotZCRaGlYLDP1R8D',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/a-mensagem-dos-homenzinhos/a-mensagem-dos-homenzinhos.html',
        destination: '/atividades/portugues/9XS3VKXyAV9YyNBmWLUZ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/agentes-da-boa-convivencia/agentes-da-boa-convivencia.html',
        destination: '/atividades/portugues/Ec44joADVYb8Th4dvOTM',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/agentes-do-eca-missao-educacao/agentes-do-eca-missao-educacao.html',
        destination: '/atividades/portugues/r5vCQBMT15CUvoYF6GAz',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/roleta-do-som-inicial/roleta-do-som-inicial.html',
        destination: '/atividades/portugues/KqXDfkGr75lxXRF1cMbJ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-2/atd-arts-2.html',
        destination: '/atividades/portugues/QtG0Kj6UjQ37tLH7ms6n',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-3/atd-arts-3.html',
        destination: '/atividades/portugues/lrZC1lzHXoncVaAA1hal',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/quebra-cabeca-da-palavra/quebra-cabeca-da-palavra.html',
        destination: '/atividades/portugues/sqAwfGnAP1Bll0UZTTst',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/bingo-da-leitura-simples---cartelas/bingo-da-leitura-simples---cartelas.html',
        destination: '/atividades/portugues/zJiHCva2PtSPBh2x7O5X',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/detetives-da-gramatica-o-caso-da-crase/detetives-da-gramatica-o-caso-da-crase.html',
        destination: '/atividades/portugues/XFDMFO0W7bXvDX7mE0LQ',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/exploradores-de-mundos-o-diario-de-bordo-de-gulliver/exploradores-de-mundos-o-diario-de-bordo-de-gulliver.html',
        destination: '/atividades/portugues/YyNSIyLqqK5dA4bxrKD1',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/decifrando-nossos-direitos/decifrando-nossos-direitos.html',
        destination: '/atividades/portugues/d20i2MaPSVjZuN4rgAqu',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/trilha-silabica/trilha-silabica.html',
        destination: '/atividades/portugues/wAbSCLgQnY38xg84Uzox',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-4/atd-arts-4.html',
        destination: '/atividades/portugues/xQzANX9y0A4XvJ1aBBZR',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-5/atd-arts-5.html',
        destination: '/atividades/portugues/AZp9P4bWzCpOZksdjQAC',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/bate-palmas-das-silabas/bate-palmas-das-silabas.html',
        destination: '/atividades/portugues/FEYxI8xUPE27FtGdkfDm',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/domino-das-rimas/domino-das-rimas.html',
        destination: '/atividades/portugues/L412CZjtZIvwOhwgirrb',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/minha-escola-de-direitos/minha-escola-de-direitos.html',
        destination: '/atividades/portugues/3Cv9jKO1PwPr1ACj6d30',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/nossos-combinados-do-coracao/nossos-combinados-do-coracao.html',
        destination: '/atividades/portugues/rlTlaKnPdgcn6WQhdL3K',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/fichas-de-grafomotricidade-o-tracado-do-alfabeto/fichas-de-grafomotricidade-o-tracado-do-alfabeto.html',
        destination: '/atividades/portugues/RoH2afvXENrNzDfpxUvj',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/fichas-dos-detetives-do-som-inicial/fichas-dos-detetives-do-som-inicial.html',
        destination: '/atividades/portugues/WcCBLZXNL0lguREN3Je9',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/atd-lp-6/atd-arts-6.html',
        destination: '/atividades/portugues/6azOIlo8I7NGrqeWWL3Z',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/lingua-portuguesa/pagdow/cruzadinha-objetos-da-casa/8-29.04.25---atividade-do-dia.html',
        destination: '/atividades/portugues/k5DHmn1g8RMVRlIQEa3y',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-1/atd-arts-1.html',
        destination: '/atividades/geral/Sj3f0I1oQlWuwjc7CLwP',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-3/atd-arts-3.html',
        destination: '/atividades/geral/v1V4f87C7X3E1qWkYgzn',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-6/atd-arts-6.html',
        destination: '/atividades/geral/crvQK2B7YBbJMTwWzceh',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-9/atividade-boobie-goods.html',
        destination: '/atividades/geral/huam0Vrw8cLxh4OomkMd',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-10/atividade-boobie-goods.html',
        destination: '/atividades/geral/kEl69RYCxtgBRATic2Xr',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-4/atd-arts-4.html',
        destination: '/atividades/geral/xal0ivJHI33cW3e2gyCI',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-7/jogo-da-memoria-boobie-goods.html',
        destination: '/atividades/geral/dpsGPXCISSuy8KKmmEV2',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/caca-palavras-simples/6-27.04.25.html',
        destination: '/atividades/geral/p2DDDVrmQyRmGzwcfHCU',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-2/atd-arts-2.html',
        destination: '/atividades/geral/IbsxTW2EUqyA6G7wlzb8',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-5/atd-arts-5.html',
        destination: '/atividades/geral/d8zcJ32FTMFqMRtpjdoC',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/atd-racio-8/atividade-boobie-goods.html',
        destination: '/atividades/geral/GK7CxRoLs6xkvUsPTeXf',

        permanent: true,
      },

      {
        source: '/nivel-2/4-outras-atividades/1-raciocinio/pagdow/sudoku/atividade-do-dia-sudoku-para-imprimir.html',
        destination: '/atividades/geral/O4HTL3M74rDoB8h4jbnI',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-1/atd-arts-1.html',
        destination: '/atividades/sociologia/qS3ZpaEWC1q2RTYlOsV2',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-3/atd-arts-3.html',
        destination: '/atividades/sociologia/V7OSpVY9NN0bmrhsFACF',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-5/atd-arts-5.html',
        destination: '/atividades/sociologia/fdPLrFiasBM5KgZTqoJ3',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-7/atd-arts-7.html',
        destination: '/atividades/sociologia/gSf6L8dIAy5t3cXRFwZb',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-2/atd-arts-2.html',
        destination: '/atividades/sociologia/sheOf29MAcjre562JOw5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-4/atd-arts-4.html',
        destination: '/atividades/sociologia/j8jT0Y3mhBJcDZNN9ie5',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-6/atd-arts-6.html',
        destination: '/atividades/sociologia/RVDMt7xU4FKg8uTkyu6R',

        permanent: true,
      },

      {
        source: '/nivel-2/2-bncc/sociologia/pagdow/atd-socio-8/atd-arts-8.html',
        destination: '/atividades/sociologia/yf3FMVssXnYXahZN79f4',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/prova-inspetor-de-alunos-ibam-guaruja/prova-inspetor-de-alunos-ibam-guaruja.html',
        destination: '/atividades/simulados/CvP5azOgN8bhsERhWXJY',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-mat-3ano/simulado-saeb-matematica.html',
        destination: '/atividades/simulados/Dm23ojYMcz1e8KrAgMSx',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-mat-9ano/simulado-saeb-matematica.html',
        destination: '/atividades/simulados/7CvS621VEQuGsk56q9os',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-port-5ano/simulado-saeb-portugues.html',
        destination: '/atividades/simulados/4lnYfrpBCWMwGySs9eIc',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-mat-5ano/simulado-saeb-matematica.html',
        destination: '/atividades/simulados/h0t3RUfNOQ8v43SK5yjl',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-port-3ano/simulado-saeb-portugues.html',
        destination: '/atividades/simulados/4SEe3KdZKpENqzdp69jd',

        permanent: true,
      },

      {
        source: '/nivel-2/3-simulados/simulados/saeb/saeb-port-9ano/simulado-saeb-portugues.html',
        destination: '/atividades/simulados/1ky54JaptCBeOz5biqeG',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-33/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/PzlsUK4Gih2MdGUrnIu1',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-17/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/labaC8ebjXl1JlpGOgT8',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-25/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/cQHRjqjF8iZE2Y5iXJFV',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-4/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/qmxZw1zzwspp4DwOMEDE',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-5/atividade-gato-letrado.html',
        destination: '/atividades/infantil/b5R1NHcublzR3EupRngP',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-26/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/X4X5N3mZolg9N07jUf5L',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-18/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/Gvsu3AUgNn9KTYW2aZz9',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-1/rima-gato-letrado.html',
        destination: '/atividades/infantil/ipXvoStZGHryhU5zEMRR',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-10/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/RziofNQQEWskUBqAyNm1',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-19/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/htJuvs3xnB2RkeanVno7',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-27/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/TuK8XoVD5889G2MZbCCH',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-6/atividade-labirinto-tatu.html',
        destination: '/atividades/infantil/5GqvJ7bUuMVAwXO3lm2P',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-7/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/uGWaCPITwTKpDVt0GVQW',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-28/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/xLG7sbbndRtyMLiufK6M',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-2/atividade-gato-letrado.html',
        destination: '/atividades/infantil/nKgQzE5AUtLHjhMxDuoG',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-11/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/3sYcGtnwjS80Hk0K0WQp',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-12/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/HcwsA5XlXJdVtn8552YQ',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-20/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/A5DMClpaBHZIwovLeV45',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-29/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/d1wB5qDZdduPrKkiwHwL',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-8/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/MC1qpTeAewOZXStgKJFM',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-9/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/zW4QO6wFwVK3tXODE0ms',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-3/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/wLfNifcWoXvhXf1AT3aH',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-21/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/Btoin6YRh8lHlsIfClLA',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-13/atividade-gato-letrado.html',
        destination: '/atividades/infantil/omSk2lkEAknjQyJMjEoE',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-14/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/q3vOnuWPbyjEO1bVu2q4',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-22/atividade-labirinto-abelhinha.html',
        destination: '/atividades/infantil/Og1mdwGoGZvbd8uHSc0G',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-30/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/MhwWGVUPSyaz86Mscvgs',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/quebra-cabeca-de-leao/6-27.04.25---atividade-do-dia.html',
        destination: '/atividades/infantil/LhUcn43wCMMMCIYVXVgg',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-31/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/d6jS3n2U2l815p1BNhki',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-23/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/x8xvkME81ZVpqkJ4pBHA',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-15/atividade-cordanecao-motora.html',
        destination: '/atividades/infantil/p7D8gKdBhRR46fxJRtgV',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-16/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/zj1bze93JNeP4uARlUiV',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-24/atividade-cordenacao-motora.html',
        destination: '/atividades/infantil/1sut2Yy0HW637rLV1xwR',

        permanent: true,
      },

      {
        source: '/nivel-2/5-recortar-e-pintar/1-infantil/pagdow/atividade-infantil-32/atividade-infantil-gratis.html',
        destination: '/atividades/infantil/lRoy1ioNBxc4IbpksHNj',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/dia-dos-povos-indigenas-como-ir-alem-do-estereotipo-com-uma-educacao-inclusiva/dia-dos-povos-indigenas-como-ir-alem-do-estereotipo-com-uma-educacao-inclusiva.html',
        destination: '/artigos/vDOAjmelU0doHvPqnAoi',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/3-estrategias-praticas-para-a-inclusao-de-alunos-com-tea/3-estrategias-praticas-para-a-inclusao-de-alunos-com-tea.html',
        destination: '/artigos/InzXPwJYCCa9v6JRKlS5',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/carnaval-inclusivo-como-acolher-alunos-com-hipersensibilidade-sensorial-na-folia-escolar/carnaval-inclusivo-como-acolher-alunos-com-hipersensibilidade-sensorial-na-fol.html',
        destination: '/artigos/lpWhSCt7rSMAD5Q57nuc',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/carnaval-2026-e-sustentabilidade/carnaval-2026-e-sustentabilidade.html',
        destination: '/artigos/ylLTkVNOeXfHYFrIvtcx',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/consciencia-fonologica/conciencia-fonologica.html',
        destination: '/artigos/cR2ToAsGnk5SKnq3ofiy',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/praticas-pedagogicas-inovadoras/praticas-pedagogicas-na-educacao-infantil.html',
        destination: '/artigos/4L5q1kVjoa8U00KwdCP7',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/15_a_importancia_da_musica_na_educacao_infantil_estimulo_a_linguagem_e_a_criatividade/a_importancia_da_musica_na_educacao_infantil_estimulo_a_linguagem_e_a_criativi.html',
        destination: '/artigos/4fxHvNxZRZFi7vGJmPRu',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/14_alfabetizacao_infantil/alfabetizacao_infantil.html',
        destination: '/artigos/ft9ZOfc4nJOWokAKzhY6',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/1--como-brincar-ensina/brincar-tambem-ensina.html',
        destination: '/artigos/bkgqVAUjPChiOpuJr3kj',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/10-bncc-educacao-infanil/bncc-educacao-infantil.html',
        destination: '/artigos/ofWsZHyvBUl5OKBOkPQj',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/7--ensinando-as-criancas-a-resolver-conflitos/ensinando-as-criancas-a-resolverem-conflitos.html',
        destination: '/artigos/UXlmTh0X99am4w6anElM',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/5--atividades-simples-para-desenvolver-habilidades-socioemocionais-na-infancia/atividades-simples-para-desenvolver-habilidades-socioemocionais-na-infancia.html',
        destination: '/artigos/RJb4OytdD4BtQRe4jYM3',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/11-habilidades-da-bncc-educacao-infantil/habilidades-da-bncc-educacao-infantil.html',
        destination: '/artigos/xniOgT4jxS3kcI65ldHj',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/12-6-atividades-matematicas/as-melhores-atividades-de-matematica-para-educacao-infantil.html',
        destination: '/artigos/YRxhdJafKmZfSOKuvsyq',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/13_concurso_educacao_guaruja/concurso_educacao_guaruja.html',
        destination: '/artigos/h4AO5KygfimgadpbIKwe',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/2---a-historia-da-educacao-especial/historia-da-educacao-especial-no-brasil.html',
        destination: '/artigos/LOBamYtiKOIIYRXOaK5O',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/3---jogos-que-eninam-de-verdade/jogos-que-ensinam-pela-gamificacao.html',
        destination: '/artigos/uzQULhe4NsRHah09Ypjx',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/4--como-estimular-a-autonomia-das-criancas-no-ambiente-escolar-e-em-casa/como-estimular-a-autonomia-das-criancas-no-ambiente-escolar-e-em-casa.html',
        destination: '/artigos/PPKkbFHMnVmosExa4SAl',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/6--5-atitudes-simples-que-mostram-a-crianca-que-ela-e-valorizada/5-atitudes-simples-que-mostram-a-crianca-que-ela-e-valorizada.html',
        destination: '/artigos/gDn5sKoEfYIm2QmLT0mb',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/atividade-para-educacao-infantil/atividades-para-educacao-infantil.html',
        destination: '/artigos/TulCTuKiIKK18Ma39NdU',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/opoderdofeedback/noticia-3.html',
        destination: '/artigos/hXJxcqIEzXe2sOYxoCHc',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/damas---seus-beneficios/noticia-4.html',
        destination: '/artigos/Xd2JFl82VnRSqeUL838c',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/o-poder-da-leitura/noticia-8.html',
        destination: '/artigos/3onoqrh4x1XxBaiIsHfD',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/8-a-volta-da-reprova/a-volta-da-reprova-nas-escolas-brasileiras.html',
        destination: '/artigos/X5uyzc2xhkaAQmoRWulr',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/comoadaptaraula/noticia-2.html',
        destination: '/artigos/DqefjozZBO0u9DLusXMu',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/dia-do-autismo/noticia-7.html',
        destination: '/artigos/H7HUMPkV4mv7hlADP4hV',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/diadadown/noticia-4.html',
        destination: '/artigos/g0FyO5FTU9sNAbZ4dCPk',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/opoder-do-nao/noticia-6.html',
        destination: '/artigos/tkaGyaazqbtFelpKC34p',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/2-artigos/pais-podem-dar-aula/noticia-1.html',
        destination: '/artigos/Mo5m3zGdyCEzFE1fl7x8',

        permanent: true,
      },

      {
        source: '/nivel-2/categorias.html',
        destination: '/atividades',

        permanent: true,
      },

      {
        source: '/nivel-2/1-pagina-inicial/1-paginas/artigos.html',
        destination: '/artigos',

        permanent: true,
      },
      
      // 👇 Quando você postar a próxima atividade, é só abrir uma nova chave {} como essa aqui embaixo:
      // {
      //   source: '/link-antigo-da-segunda-atividade',
      //   destination: '/atividades/materia/id-da-segunda-atividade',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;