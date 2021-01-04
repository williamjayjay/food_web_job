import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu'

import { Container,Header,
  Form,FieldSet, Legend,DivField,
  Label, Input, Button, ContainerMaster, GroupDivField} from './styles';

import Cookies from 'universal-cookie';

export default function Register() {
  
  const cookies = new Cookies();

  const [formData, setFormData] = useState({
    cep: '',
    estado: '',
    bairro: '',
    logra: '',
    complemento: '',
    nome:'',
    dataNasc:'',
    cpf:''

  })
  const dadosStorage = localStorage.getItem('dados');

  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(event.target.value, event.target.name);

    setFormData({ ...formData, [name]:value });
    // setFormData({ ...formData, [name]:value });
    
  }

  // function handleInputChangeCEP(event) {
  //   const { name, value } = event.target;
  //   console.log(event.target.value, event.target.name);

  //   const cep = value?.replace(/[^0-9]/g, '');

  //   if (cep?.lenght !== 8){
  //     return setFormData({ ...formData, [name]:value });
  //   }

  //   // setFormData({ ...formData, [name]:value });
    
  // }


  

   function handleSubmit(event) {
    event.preventDefault();
    const { cep, estado, bairro, logra, complemento,nome, dataNasc,cpf } = formData;

    const data = {
      cep,
      estado,
      bairro,
      logra,
      complemento,
      nome,
      dataNasc,
      cpf
    }

    if(cep == '' || teste == 2){
      setFormData({
        cep:'',
        estado:'',
        bairro:'',
        logra:'',
        complemento:'',
        nome:'',
        dataNasc:'',
        cpf:''
      })
    }
     if(cep !='' &&  cpf !='' ){
      //  alert('passou cep estado e cpf')
      if(bairro != '' && logra != '' ){
      //  alert('passou bairro  e logra')
        if(nome != '' && dataNasc !=''){
      //  alert('passou nome  e data')
          
          if(teste != 0 && teste!=2 ){
            return(
              window.location.href='./register',
              localStorage.setItem('dados', JSON.stringify(data)),
              cookies.set('formulario', `Usuario_${nome}`, {path: '/'}),
              alert('Cadastrado com sucesso!!')
              );
          }

        }
        
      }
    }else{

      return alert('Por favor, preencha todos os campos corretamente.')
    }
    
  }
  
  useEffect(() => {

    // console.log('Cookie abaixo!')
    // console.log(cookies.get('formulario'))

    if(dadosStorage){
      setFormData(JSON.parse(dadosStorage));
    }
  },[])

  useEffect(() => {
    if(formData.cep != ''){

      fetch(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.bairro);
        // console.log(data.logradouro);
        setTeste(1);
  
        setFormData({
          ...formData,
          estado:data.localidade,
          bairro:data.bairro,
          logra:data.logradouro,
          complemento: data.complemento
        })

      }).catch(  
        setTeste(2),
  
        // console.log('error'),

         (teste ==2)
         ?
          setFormData({
            estado:'',
            bairro:'',
            logra:'',
            complemento:'',
          })
          : 
          null
        
      
      )

  }

  }, [formData.cep]);


  const [teste, setTeste] = useState(0);



  return (
  <ContainerMaster>
    <Container>
      <Header>
            <Link  id="voltar" to ="/">
              <p  >Voltar</p>
            </Link>
            <div id={'uva'} >
              <p>Healthy Food</p>
            </div>
            
          </Header>

      <Form onSubmit={handleSubmit} >
        <h1>Faça seu cadastro já!</h1>

        <FieldSet>

        <DivField>
        <Label className="digite" >Digite seu nome:</Label>
        <Input
        type="text"
        name="nome"
        placeholder="Joao Joao e Joao"
        value={formData.nome}
        id='nomex'  
        onChange={handleInputChange}
        />
      </DivField>

    <GroupDivField>
      <DivField>
        <Label className="digite" >Digite o seu CPF:</Label>
        <Input
        type="number"
        name="cpf"
        maxLength='12'
        placeholder="ex: 19955588878"
        value={formData.cpf}
        id="cpf"  
        onChange={handleInputChange}
        />
      </DivField>

      <DivField>
        <Label className="digite" >Digite sua data de nascimento:</Label>
        <Input
        type="date"
        name="dataNasc"
        placeholder="ex: 25/08/1950"
        value={formData.dataNasc}
        id="dataNasc"  
        onChange={handleInputChange}
        />
      </DivField>
    </GroupDivField>

      <GroupDivField>
      <DivField>
        <Label className="digite" >Digite o CEP:</Label>
        <Input
        type="number"
        name="cep"
        placeholder="01001011"
        value={formData.cep}
        id="cep"  
        onChange={handleInputChange}
        />
      </DivField>

        <DivField>
          <Label>Seu Estado</Label>
          <Input
          disabled
          placeholder="Brasilia...."
          value={formData.estado}
          type="text"
          name="estado"
          id="estado"  
          onChange={handleInputChange}
          />
        </DivField>

      </GroupDivField>

      <GroupDivField>

      <DivField>
          <Label>Bairro</Label>
          <Input
          disabled
          placeholder="Bairo do aprendizado"
          value={formData.bairro}
          type="text"
          name="bairro"
          id="bairro"  
          onChange={handleInputChange}
          />
        </DivField>

        <DivField>
          <Label>Logradouro</Label>
          <Input
          disabled
          placeholder="Rua da sabedoria"
          value={formData.logra}
          type="text"
          name="logra"
          id="name"  
          onChange={handleInputChange}
          />
        </DivField>


      </GroupDivField>

      <DivField>
          <Label>Complemento</Label>
          <Input
          placeholder="Garagem...."
          value={formData.complemento}
          type="text"
          name="complemento"
          id="complemento"  
          onChange={handleInputChange}
          />
        </DivField>

        </FieldSet>

        <Button type="submit" >
          Cadastrar ponto de coleta
        </Button>
      </Form>
      
    </Container>
    <MobileMenu/>
  </ContainerMaster>

  )
}

