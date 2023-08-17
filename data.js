import { v4 as uuidv4 } from 'uuid'

const tasks = [
  {
    id: uuidv4(),
    title: 'Terminar o desafio',
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: 'Fazer caminhada hoje',
    isComplete: false,
  },
]

tasks()

// excluir posso usar filter
// somar tudo e saber quantas tasks posso usar length
// e estudar reduce p/ saber quantas tasks foram concluidas
