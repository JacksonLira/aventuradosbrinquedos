import { DateTime } from 'luxon'
import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState('')
  const [finished, setFinished] = useState(false) // Novo estado para verificar se o contador terminou

  useEffect(() => {
    // Defina a data e hora de destino usando DateTime.fromISO
    const targetDate = DateTime.fromISO('2024-10-27T17:30:00', {
      zone: 'America/Manaus'
    })

    // Função para calcular o tempo restante
    const calculateTimeLeft = () => {
      const now = DateTime.now().setZone('America/Manaus') // Hora atual da cidade/estado especificado
      const difference = targetDate
        .diff(now, ['hours', 'minutes', 'seconds'])
        .toObject()

      if (
        difference.hours <= 0 &&
        difference.minutes <= 0 &&
        difference.seconds <= 0
      ) {
        setFinished(true) // Marca que o contador terminou
        setTimeLeft('') // Limpa o tempo restante
      } else {
        setTimeLeft(
          `${Math.floor(difference.hours)} Horas ${Math.floor(difference.minutes)} Minutos ${Math.floor(difference.seconds)} Segundos`
        )
      }
    }

    // Atualizar o contador a cada segundo
    const timer = setInterval(calculateTimeLeft, 1000)

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer)
  }, [])

  return (
    <div className=" -skew-x-12 font-GillCondensedB laptop:text-3xl ">
      <h1 className="text-[#ffda00]">ÚLTIMAS APRESENTAÇÕES!!!!!</h1>
      {!finished ? (
        <p
          className="grid  grid-flow-col border border-full p-4 gap-x-2 items-end 
        laptop:text-3xl text-white rounded-xl font-GillCondensedB"
        >
          {timeLeft}
        </p>
      ) : (
        <p
          className="grid  grid-flow-col border border-full p-4 gap-x-2 items-end 
        laptop:text-3xl text-white rounded-xl font-GillCondensedB"
        >
          O Espetáculo já começou! 🚀
        </p>
      )}
    </div>
  )
}

export default CountdownTimer
