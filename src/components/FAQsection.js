import React from 'react'

import FAQItem from './FAQitem'

const FAQSection = () => {
  const faqs = [
    {
      question: 'A entrada é gratuita ?',
      answer: 'Sim, nossa pessa é gratuita e para todas as idades.'
    },
    {
      question: 'Há vaga para estacionamento?',
      answer: 'Sim, nosso estacionamento fica proximo ao shopping leste.'
    },
    {
      question: 'Precisa levar 1kg de alimento?',
      answer: 'Não, tudo que pedimos é a sua presença para esse momento único.'
    },
    {
      question: 'Poderá tirar fotos com os personagens?',
      answer:
        'Sim, ao sair do show, estaremos lhe aguardando no banner de fotos.'
    },
    {
      question: 'Posso filmar a peça ?',
      answer: 'Sim, desde que seja desligado os flashes, sem nenhum problema.'
    }
    // Adicione mais perguntas e respostas aqui
  ]

  return (
    <section className=" bg-transparent">
      <div className="grid laptop:grid-cols-3 mobile:grid-cols-1 laptop:grid-rows-4 mobile:grid-rows-5 overflow-hidden laptop:gap-7 mobile:gap-1">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQSection
