#!/bin/bash
rm -r target/
mvn install
mv target/EjemploBack-1.0-SNAPSHOT.war target/EjemploBack.war
/opt/glassfish5/glassfish/bin/asadmin --port 4848 undeploy EjemploBack
/opt/glassfish5/glassfish/bin/asadmin --port 4848 deploy target/EjemploBack.war