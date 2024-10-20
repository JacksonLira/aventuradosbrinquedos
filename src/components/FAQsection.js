import React from 'react'

import FAQItem from './FAQitem'

const FAQSection = () => {
  const faqs = [
    {
      question: 'A igreja tem estacionamento próprio? ',
      answer:
        'Sim, fica na parte de trás da igreja, em nosso anexo, também temos um anexo no shopping cidade leste.'
    },
    {
      question: 'O estacionamento tem acesso para PCD?',
      answer:
        'Não temos, o ideal é ele entrar pela frente da igreja mesmo pois o nosso estacionamento é de areia.'
    },
    {
      question: 'Como faço para ter as minhas fotos na hora?',
      answer:
        'Você pode acessar o nosso site e liberaremos as fotos de acordo com cada dia.'
    },
    {
      question:
        'Tenho um filho com deficiência auditiva, tem tradução simultânea em libras?',
      answer:
        'Temos sim, durante o nosso espetáculo temos tradução simultânea em libras'
    },
    {
      question: 'É de graça? Precisa levar 1Kg de alimento não perecível?',
      answer:
        'É totalmente gratuito! Não precisa trazer, temos lanchonete que você pode estar adquirindo algum alimento.'
    },
    {
      question: 'Qual o endereço da igreja?',
      answer: 'Av. Autaz Mirim, 7761, Tancredo Neves, próx. ao 14° DIP.'
    },
    {
      question: 'É gratuito mesmo? é necessário pagar o estacionamento?',
      answer: 'Sim, é gratuito, entrada e estacionamento.'
    },
    {
      question: 'Posso reservar o meu acento?',
      answer: 'Infelizmente não, será por ordem de chegada.'
    },
    {
      question: 'Preciso esperar em alguma fila?',
      answer:
        'Haverá possíveis filas, como no fim semana ou feriado, ou entre 1 apresentação e outra, mas fazemos o possível para colocar você dentro do auditório.'
    },
    {
      question: 'Pode consumir alimentos no auditório?',
      answer: 'Pode trazer sim, não temos restrição referente a isso.'
    },
    {
      question: 'Tem área reservadas para PCD?',
      answer: 'Temos sim, pode procurar pessoas com o colete azul'
    },
    {
      question: 'A partir de que horas posso chegar para ter um bom lugar?',
      answer:
        'Você pode estar chegando 1 hora antes, os lugares já estarão liberados'
    },
    {
      question:
        'Como faço para ter acesso as minhas fotos no final do espetáculo?',
      answer: 'Você pode acessar o nosso site e baixar sem problemas algum.'
    },
    {
      question:
        'Se meu filho fizer suas necessidades na fralda, tem local que eu posso troca-lo?',
      answer:
        'Temos sim, você pode estar perguntando das pessoas com um colete azul e eles irão lhe direcionar para o melhor lugar'
    },
    {
      question: 'O auditório da igreja é climatizado?',
      answer:
        'É sim, o nosso auditório foi preparado para lhe dar o melhor conforto'
    },
    {
      question: 'Posso filmar e tirar foto?',
      answer: 'Pode fotografar e filmar a vontade.'
    },
    {
      question: 'Posso tirar foto com os personagens?',
      answer:
        'Pode sim, ao final das programações você pode tirar fotos com os personagens'
    },
    {
      question:
        'Se o estacionamento lotar eu terei que colocar o meu carro da rua?',
      answer:
        'Não será necessário, temos um estacionamento em anexo do shopping Cidade Leste que em último caso, usaremos para colocar os carros extras'
    }
    // Adicione mais perguntas e respostas aqui
  ]

  return (
    <section className=" bg-transparent">
      <div className="grid laptop:grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 tablet:gap-5 laptop:grid-rows-4 mobile:grid-rows-5 overflow-hidden laptop:gap-7 mobile:gap-1">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQSection
