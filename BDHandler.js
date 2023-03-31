// Importing the 'file system' node.js module
const FS = require('fs')

class BDHandler{
    fileName = 'DataFile.txt'
    user = {
        cpf: 0,
        nome: 'nome',
        data_nascimento: '00/00/0000'
    }
    
    //Verify if the file already existis, if so, dont do anyting, if not, create a new one and write in it the data of 'usuario' in JSON format
    constructor(){
        if(!FS.existsSync(this.fileName)){
            FS.writeFileSync(this.fileName, JSON.stringify(this.user), (err)=>{
                if(err){console.log('Erro ao criar o arquivo: ', err)}
            })
        }
    }

    POST(newUser){
        this.user = {
            cpf: newUser.cpf,
            nome: newUser.nome,
            data_nascimento: newUser.data_nascimento
        }

        //delte all file's content 
        FS.truncateSync(this.fileName)

        //write the new file's content
        FS.writeFileSync(this.fileName, JSON.stringify(this.user), (err)=>{
            if(err){console.log('Erro ao atualizar o arquivo: ', err)}
        })
    }

    GET(){
        if(FS.existsSync(this.fileName)){
            let data = JSON.parse(FS.readFileSync(this.fileName, 'utf-8'))
            if(data.nome == 'nome'){console.log('Erro, o arquivo não existe.')}
            else{console.log(data)}
        }
        else{console.log('Erro, o arquivo não existe.')}
    }

    DELETE(){
        this.user = {
            cpf: 0,
            nome: 'nome',
            data_nascimento: '00/00/0000'
        }

        //delte all file's content 
        FS.truncateSync(this.fileName)

        //write the default value
        FS.writeFileSync(this.fileName, JSON.stringify(this.user), (err)=>{
            if(err){console.log('Erro ao deletar os dados arquivo: ', err)}
        })
    }
}

module.exports = BDHandler