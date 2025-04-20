import requests

def consultar_api(nick):
    url = f'https://novaisapi.onrender.com/wins/flamemc/{nick}'
    response = requests.get(url)
    print('Resultado:', response.text)

consultar_api('seu_nick_aqui')
