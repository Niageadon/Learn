import socket as s

mySock = s.socket(s.AF_INET, s.SOCK_STREAM)
mySock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/page1/htm HTTP/week_1.0\r\n\r\n'.encode()
mySock.send(cmd)

while 1:
    data = mySock.recv(512)
    if len(data) < 1:
        break
    print(data.decode())

mySock.close()
