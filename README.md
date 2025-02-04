# Этот проект реализация тестового задания от компании Market Lab

## Описание тестового задания:
Реализовать сервис одноразовых ссылок

Необходимо реализовать сервис, который будет состоять из 2х эндпойнтов

 1. Создать одноразовую ссылку
принимает строку, запоминает её и возвращает ссылку, по которой можно получить строку, одноразовая ссылка должна быть уникальна, т.е. в один момент времени, в сервисе не может быть 2х одинаковых активных одноразовых ссылок.
 2. Получение значения по одноразовой ссылке, сгенерированной в 1-м эндпойнте.
При получении значения по одноразовой ссылке необходимо проверять, активна ли она. Если ссылка уже использована, то следует вернуть сообщение об ошибке.

После выполнения, код должен быть выложен в публичный репозитория GitHub, Gitlab, BitBucket.
Можно использовать любой способ хранения данных.

---

# Запукс проекта

### Шаг 1: Создвать сеть
``` bash
docker network create web-app-network
```

### Шаг 2: Скопировать содежимое файла .env.example в файфл .env
``` bash
cp .env.example .env
```

### Шаг 3: Запустить проект при помощи docker compose
``` bash
docker compose up -d
```
### Шаг 4: Применить миграции
```bash
docker compose exec -it app npx prisma migrate deploy
```

---

### Открыть API по ссылке: [http://localhost:3011/api/](http://localhost:3011/api/)
