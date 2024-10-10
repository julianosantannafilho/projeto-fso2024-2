FROM amazoncorretto:17
LABEL authors="ivangabrieltrapp@gmail.com"

WORKDIR /backend

COPY build/libs/*.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend.jar"]