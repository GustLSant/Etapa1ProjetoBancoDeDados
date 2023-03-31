const bdHandler = require('./BDHandler')

let b = new bdHandler()

b.POST(
    {
        cpf: 12345678900,
        nome: 'fulano',
        data_nascimento: '01/01/2001'
    }
)

b.GET()

b.POST(
    {
        cpf: 11122233344,
        nome: 'ciclano',
        data_nascimento: '01/01/2002'
    }
)

b.GET()

b.DELETE()

b.GET()