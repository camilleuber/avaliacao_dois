from config import *
from modelo import Cachorro

@app.route("/")
def inicio():
    return 'Sistema de cadastro de cachorros. '+\
        '<a href="/listar_cachorros">Cheque aqui os listados</a>'

@app.route("/listar_cachorros")
def listar_cachorros():
   
    cachorros = db.session.query(Cachorro).all()
 
    cachorros_em_json = [ x.json() for x in cachorros ]
 
    resposta = jsonify(cachorros_em_json)
 
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 

app.run(debug=True)