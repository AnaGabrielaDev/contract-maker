//pegar a data atual
let dataAtual = ' '
function today(){
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  dataAtual =  dia + "/" + mes + "/" + ano;
  //dataatual - alterar demo para o pdf depois
  //document.getElementById('demo').innerHTML = dataAtual;  
}
//outra data
function otherday(){
  var outraData = document.getElementById('outraData');
  var novaData = document.getElementById('novaData');
  
  novaData.style.display = outraData.checked ? "block" : "none";
}

function fiador (){
  var checkFiadorSelected = document.getElementById("garantiaOpcoes").options[2].selected === true;

  if(checkFiadorSelected)
    document.querySelector('.showFiador').style.display = 'block';
  else
    document.querySelector('.showFiador').style.display = 'none';
}



//pdf
function generatePdf() {

  var metodoGarantia = document.querySelector('#garantiaOpcoes').value;

  //locador 
  var nameLocador = document.querySelector('#nameLocador').value;
  var nacionalidadeLocador = document.querySelector('#nacionalidadeLocador').value;
  var estadocivilLocador = document.querySelector('#estadocivilLocador').value;
  var profissaoLocador = document.querySelector('#profissaoLocador').value;
  var rgLocador = document.querySelector('#rgLocador').value;
  var cpfLocador = document.querySelector('#cpfLocador').value;
  var addressLocador = document.querySelector('#addressLocador').value;
  var numAddressLocador = document.querySelector('#numAddressLocador').value;
  var complementoAddressLocador = document.querySelector('#complementoAddressLocador').value;
  var neighborhoodLocador = document.querySelector('#neighborhoodLocador').value;
  var cepLocador = document.querySelector('#cepLocador').value;
  var cityLocador = document.querySelector('#cityLocador').value;
  var stateLocador = document.querySelector('#stateLocador').value;

  //locatario
  var nameLocatario = document.querySelector('#nameLocatario').value;
  var nacionalidadeLocatario = document.querySelector('#nacionalidadeLocatario').value;
  var estadocivilLocatario = document.querySelector('#estadocivilLocatario').value;
  var profissaoLocatario = document.querySelector('#profissaoLocatario').value;
  var rgLocatario = document.querySelector('#rgLocatario').value;
  var cpfLocatario = document.querySelector('#cpfLocatario').value;
  var addressLocatario = document.querySelector('#addressLocatario').value;
  var numAddressLocatario = document.querySelector('#numAddressLocatario').value;
  var complementoAddressLocatario = document.querySelector('#complementoAddressLocatario').value;
  var neighborhoodLocatario = document.querySelector('#neighborhoodLocatario').value;
  var cepLocatario = document.querySelector('#cepLocatario').value;
  var cityLocatario = document.querySelector('#cityLocatario').value;
  var stateLocatario = document.querySelector('#stateLocatario').value;
  
  //locacao
  var finsLocacao = document.querySelector('#finsLocacao').value;
  var addressLocacão = document.querySelector('#addressLocacão').value;
  var valorLocacao = document.querySelector('#valorLocacao').value;
  var formaPagamento = document.querySelector('#formaPagamento').value;
  var indices = document.querySelector('#indices').value;

  //fiador
  if(metodoGarantia === "fiador"){
    var nameFiador = document.querySelector('#nameFiador').value;
    var nacionalidadeLocador = document.querySelector('#nacionalidadeLocador').value;
    var estadocivilFiador = document.querySelector('#estadocivilFiador').value;
    var profissaoFiador = document.querySelector('#profissaoFiador').value;
    var rgFiador = document.querySelector('#rgFiador').value;
    var cpfFiador = document.querySelector('#cpfFiador').value;
    var addressFiador = document.querySelector('#addressFiador').value;
  }

  //contrato
  var docValidade = document.querySelector('#docValidade').value;
  var dataAtualSelected = document.querySelector('#dataAtual').checked;
  var txtNovaData = document.querySelector('#txtNovaData').value;

  var dd = {
    content: [
      {
        text: `CONTRATO DE LOCAÇÃO DE IMÓVEL ${finsLocacao}`,
        style: 'header'
      },
      {
        text: '\nLOCADOR:',
        style: 'subheader'
      },
        `${nameLocador}, ${nacionalidadeLocador}, ${estadocivilLocador}, ${profissaoLocador}, portador da cédula de identidade R.G. nº ${rgLocador} e CPF nº ${cpfLocador}, residente e domiciliado à ${addressLocador}, ${numAddressLocador}, ${complementoAddressLocador}, ${neighborhoodLocador}, ${cepLocador}, ${cityLocador}, ${stateLocador}`,
        
      {
        
        text: '\nLOCATÁRIO:',
        style: 'subheader'
      }, 
        `${nameLocatario}, ${nacionalidadeLocatario}, ${estadocivilLocatario}, ${profissaoLocatario}, portador da cédula de identidade R.G. nº ${rgLocatario} e CPF nº ${cpfLocatario}, residente e domiciliado à ${addressLocatario}, ${numAddressLocatario}, ${complementoAddressLocatario}, ${neighborhoodLocatario}, ${cepLocatario}, ${cityLocatario}, ${stateLocatario}`,
      {
        //text: 'FIADOR',
        //style: 'subheader'
      //},
        text: '\n CLÁUSULA PRIMEIRA - DO OBJETO DA LOCAÇÃO',
        style: 'subheader'
      },
        `\n1.1 O objeto deste contrato de locação é o imóvel, situado à ${addressLocacão}, no exato estado do termo de vistoria e fotos em anexo.`,
      {
        text: '\nCLÁUSULA SEGUNDA - DA DESTINAÇÃO DO IMÓVEL',
        style: 'subheader'
      },
        `\n2.1 O LOCATÁRIO declara que o imóvel, ora locado, destina-se única e exclusivamente para o seu uso ${finsLocacao}. \n
        2.2 O LOCATÁRIO obriga por si e demais dependentes a cumprir e a fazer cumprir integralmente as disposições legais sobre o Condomínio, a sua Convenção e o seu Regulamento Interno.`,
      {
        text: '\nCLÁUSULA TERCEIRA - DO PRAZO DE VIGÊNCIA',
        style: 'subheader'
      },
        `\n3.1 O prazo da locação é de ________ meses, iniciando-se em ${dataAtualSelected ? dataAtual : txtNovaData} com término em ${docValidade}, independentemente de aviso, notificação ou interpelação judicial extrajudicial. \n
        3.2 Findo o prazo ajustado, se o locatário continuar na posse do imóvel alugado por mais de trinta dias sem oposição do locador, presumir - se - á prorrogada a locação por prazo indeterminado, mantidas as demais cláusulas e condições do contrato.`,
      {
        text: '\nCLÁUSULA QUARTA - DA FORMA DE PAGAMENTO',
        style: 'subheader'
      },
        `\n4.1 O aluguel mensal deverá ser pago até o dia 5 (cinco) do mês subsequente ao vencido, por meio de ${formaPagamento}, no valor de R$ ${valorLocacao} , reajustados anualmente, pelo índice ${indices}, reajustamento este sempre incidente e calculado sobre o último aluguel pago no último mês do ano anterior. Sendo extinto tal índice, será utilizado, sucessivamente, o IPC/FIPE ou IGP/FGV.`,
      {
        text: 'CLÁUSULA QUINTA - DA MULTA E JUROS DE MORA',
        style: 'subheader'
      },
        `\n5.1 Em caso de mora no pagamento do aluguel, o valor será corrigido pelo ${formaPagamento} até o dia do efetivo pagamento e acrescido da multa moratória de 10% (dez por cento) e dos juros de 1% (um por cento) ao mês e ensejará a sua cobrança através de advogado. Ficam desde já, fixados os honorários advocatícios em 10% (dez por cento), se amigável a cobrança, e de 20% (vinte por cento), se judicial.`,
      {
        text: 'CLÁUSULA SEXTA - DA CONSERVAÇÃO, REFORMAS E BENFEITORIAS NECESSÁRIAS',
        style: 'subheader'
      },
        `6.1.  Ao LOCATÁRIO recai a responsabilidade por zelar pela conservação, limpeza do imóvel e segurança.\n 
        6.2  As benfeitorias necessárias introduzidas pelo LOCATÁRIO, ainda que não autorizadas pelo LOCADOR bem como as úteis, desde que autorizadas, serão indenizáveis e permitem o exercício do direito de retenção. As benfeitorias voluptuárias não serão indenizáveis, podendo ser levantadas pelo LOCATÁRIO finda a locação, desde que sua retirada não afete a estrutura e a substância do imóvel.\n
        6.3 O LOCATÁRIO está obrigado a devolver o imóvel em perfeitas condições de limpeza, conservação e pintura, quando finda ou rescindida esta avença, conforme constante no termo de vistoria em anexo.\n 
        6.4 O LOCATÁRIO não poderá realizar obras que alterem ou modifiquem a estrutura do imóvel locado, sem prévia autorização por escrito da LOCADORA. No caso de prévia autorização, as obras serão incorporadas ao imóvel, sem que caiba ao LOCATÁRIO qualquer indenização pelas obras ou retenção por benfeitorias.\n 
        6.5 Cabe ao LOCATÁRIO verificar a voltagem e a capacidade de instalação elétrica existente no imóvel, sendo de sua exclusiva responsabilidade pelos danos e prejuízos que venham a ser causados em seus equipamentos elétrico-eletrônico por inadequação à voltagem e/ou capacidade instalada. Qualquer alteração da voltagem deverá de imediato ser comunicada ao(a) LOCADOR(A), por escrito. Ao final da locação, antes de fazer a entrega das chaves, o(a) LOCATÁRIO(A) deverá proceder a mudança para a voltagem original.\n
        6.6 O LOCADOR deve responder pelos vícios ou defeitos anteriores à locação
        PARÁGRAFO ÚNICO: O LOCATÁRIO declara receber o imóvel em perfeito estado de conservação e perfeito funcionamento devendo observar o que consta no termo de vistoria, não respondendo por vícios ocultos ou anteriores à locação.\n`,
      {
        text: '\nCLÁUSULA SÉTIMA - DAS TAXAS E TRIBUTOS',
        style: 'subheader'
      },
        `\n7.1 Todas as taxas e tributos incidentes sobre o imóvel, tais como condomínio, IPTU, bem como despesas ordinárias de condomínio e quaisquer outras despesas que recaírem sobre o imóvel, serão de responsabilidade do LOCATÁRIO, o qual arcará também com as despesas provenientes de sua utilização tais como ligação e consumo de luz, força, água e gás que serão pagas diretamente às empresas concessionárias dos referidos serviços, que serão devidos a partir desta data independente da troca de titularidade.`,
      {
        text:'\nCLÁUSULA OITAVA - DOS SINISTROS',
        style: 'subheader'
      },
        `\n8.1 No caso de sinistro do prédio, parcial ou total, que impossibilite a habitação do imóvel locado, o presente contrato estará rescindido, independentemente de aviso ou interpelação judicial ou extrajudicial.\n
        8.2 No caso de incêndio parcial, obrigando obras de reconstrução, o presente contrato terá suspensa a sua vigência, sendo devolvido ao LOCATÁRIO após a reconstrução, que ficará prorrogado pelo mesmo tempo de duração das obras de reconstrução.`,
      {
        text: '\nCLÁUSULA NONA - DA SUBLOCAÇÃO',
        style: 'subheader'
      },
        `\n9.1 É vedado ao LOCATÁRIO sublocar, transferir ou ceder o imóvel, sendo nulo de pleno direito qualquer ato praticado com este fim sem o consentimento prévio e por escrito do LOCADOR.`,
      {
        text: '\nCLÁUSULA DÉCIMA - DA DESAPROPRIAÇÃO',
        style: 'subheader'
      },
        `\n10.1 Em caso de desapropriação total ou parcial do imóvel locado, ficará rescindido de pleno direito o presente contrato de locação, sendo passível de indenização as perdas e danos efetivamente demonstradas.`,
      {
        text:'\nCLÁUSULA DÉCIMA PRIMEIRA - DOS CASOS DE FALECIMENTO',
        style: 'subheader'
      }, 
        `\n11.1 Falecendo o FIADOR, deve o LOCATÁRIO, no prazo 30 (trinta) dias, indicar substituto idôneo, nas mesmas condições do atual FIADOR, que possa garantir o valor locativo e encargos do referido imóvel, ou prestar seguro fiança de empresa idônea.`,
      {
        text: '\nCLÁUSULA DÉCIMA SEGUNDA - DA GARANTIA',
        style: 'subheader'
      },
      `pendente`,
      {
        text: '\nCLÁUSULA DÉCIMA TERCEIRA - DA ALIENAÇÃO DO IMÓVEL',
        style: 'subheader'
      }, 
        `\n13.1 No caso de alienação do imóvel, o LOCATÁRIO terá direito de preferência, e se não utilizar-se dessa prerrogativa formalmente, o LOCADOR poderá dispor livremente do imóvel.`,
      {
        text: '\nCLÁUSULA DÉCIMA QUARTA - DAS VISTORIAS',
        style: 'subheader'
      },
        `\n14.1 É facultado ao LOCADOR, mediante aviso prévio, vistoriar o imóvel, por si ou seus procuradores, sempre que achar conveniente, para a certeza do cumprimento das obrigações assumidas neste contrato.`,
      {
        text: '\nCLÁUSULA DÉCIMA QUINTA - DAS INFRAÇÕES AO CONTRATO',
        style: 'subheader'
      },
        `\n15.1 A não observância de qualquer das cláusulas do presente contrato, sujeita o infrator à multa de 3 vezes o valor do aluguel, tomando-se por base, o último aluguel vencido.`,
      {
        text: '\nCLÁUSULA DÉCIMA SEXTA - DA SUCESSÃO',
        style: 'subheader'
      },
        `\n16.1 As partes contratantes obrigam-se por si, herdeiros e/ou sucessores.`,
      {
        text: '\nCLÁUSULA DÉCIMA SÉTIMA - DA RESCISÃO DO CONTRATO',
        style: 'subheader'
      },
        `\n17.1 A rescisão previamente à vigência do presente contrato, culmina em multa contratual calculada da seguinte forma: pendente / pendente = R$ pendente ao mês X os meses faltantes para o término do contrato\n
        17.2 Após o prazo de vigência do presente, podem as partes rescindirem o contrato mediante aviso prévio de 30 dias.`,
      {
        text: '\nCLÁUSULA DÉCIMA OITAVA - DA OBSERVÂNCIA À LGPD',
        style: 'subheader'
      },
        `\n18.1 O LOCATÁRIO declara expresso CONSENTIMENTO que o LOCADOR irá coletar, tratar e compartilhar os dados necessários ao cumprimento do contrato, nos termos do Art. 7º, inc. V da LGPD, os dados necessários para cumprimento de obrigações legais, nos termos do Art. 7º, inc. II da LGPD, bem como os dados, se necessários para proteção ao crédito, conforme autorizado pelo Art. 7º, inc. V da LGPD.`,
      {
        text: '\nCLÁUSULA DÉCIMA NONA - TERMOS GERAIS',
        style: 'subheader'
      },
        `\n19.1 O LOCATÁRIO se obriga a respeitar os direitos de vizinhança com rigorosa observância da Convenção, Regulamento Interno ou outros regulamentos porventura existentes, quando a unidade estiver inserida em condomínio, ficando responsável pelas multas que vierem a ser aplicadas em razão de infrações cometidas.\n 
        19.2 Somente será permitido ao LOCATÁRIO colocar placas, letreiros, cartazes ou quaisquer inscrições ou sinais, bem como aparelhos de ar condicionado, antenas, etc. nas partes externas do imóvel locado, se for observado o previsto na legislação municipal, e em caso de unidade integrante de condomínio observar, também, o disposto na convenção e regimento interno, e prévia autorização do síndico.`,
      {
        text: '\nCLÁUSULA VIGÉSIMA - DO FORO',
        style: 'subheader'
      },
        `\n20.1 As partes elegem o foro de PENDENTE para dirimirem qualquer litígio decorrente do presente termo.\n
        E, por assim estarem justos e contratados, mandaram extrair o presente instrumento em três (03) vias, para um só efeito, assinando-as, juntamente com as testemunhas, a tudo presentes.\n`,
      {
        text: [ "\n\n _________________________________",
        {text: '\nLocal e data', fontSize: 8, alignment: 'left'},
        "\n\n _________________________________",
        {text: '\nNome e assinatura do LOCADOR', fontSize: 8, alignment: 'left'},
        "\n\n _________________________________",
        {text: '\nNome e assinatura do LOCATÁRIO', fontSize: 8, alignment: 'left'},

        {text: '\n\n\nTestemunha 1', fontSize: 12, alignment: 'left'},
        "\n\n _________________________________",
        {text: '\nNome, CPF e assinatura', fontSize: 8, alignment: 'left'},

        {text: '\n\n\nTestemunha 2', fontSize: 12, alignment: 'left'},
        "\n\n _________________________________",
        {text: '\nNome, CPF e assinatura', fontSize: 8, alignment: 'left'},

      ]
      }
      ],

    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center'
      },
      subheader: {
        fontSize: 15,
        bold: true,
        alignment: 'center'
      }
    } 
  }

  //Adicionar esse bloco no pdf se fiador
  if(metodoGarantia === "fiador") {
    var bloco = [
      {
       text: 'Escreva algo'
      }
    ];

    dd.content.push(bloco);
  }

  pdfMake.createPdf(dd).open();
}
