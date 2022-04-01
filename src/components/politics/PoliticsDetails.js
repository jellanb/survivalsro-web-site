import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
    },
    media: {
        height: '100%',
    },
    box: {
        paddingTop: '10px',
        paddingBottom : '30px'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" alignItems="center" className={classes.box}>
                <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Politicas de survival-sro
                            </Typography>
                            <Divider/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>
                                    Queremos contarle que día a día nuestro Equipo de trabajo en SurvivalSro
                                    trabajamos incansablemente para entregarles el mejor servicio de calidad y experiencia de juego
                                    dentro de esta nueva aventura.

                                    Sin embargo, para garantizar una competitividad nos vemos obligados
                                    a regular muchas actividades dentro del game.
                                    Para explicar esto de la mejor manera, utilizaremos las diferentes etapas del juego.
                                </p>
                                <h3>
                                    1) ETAPA DE LEVEL UP
                                </h3>
                                <p>
                                    Se permitira el uso de 3 Cuentas por PC y 6 Por IP para esta Etapa de juego.
                                    Se permitirá el uso de bot´s en todas las áreas de los diversos mapas del juego excluyendo las zonas de reaparición de únicos.
                                    El uso deliberado de bot´s para garantizar la Kill y dropeo de los mob únicos tendra 3 tipos de sanción.
                                    Sorprendido por 1ra Vez: Advertencia verbal e incorporacion en lista negra.
                                    Sorprendido por 2da Vez: Baneo de 24 Horas a 48 Horas a criterio del GM
                                    Sorprendiendo por 3ra Vez: Baneo de forma permanente tanto de todas sus cuentas como de su IP.
                                </p>
                                <h3>
                                    2) ETAPA DE JOP
                                </h3>
                                <p>
                                    * Solo se permitirá el uso de (1 Chart JOP POR PC) Y 2 POR IP.
                                    Todo Personaje o Guild que sea sorprendido (Mamuteando) es decir (Auto Robándose) Recibirá un baneo de 7 a 14 días y será eliminado de los gremios perteneciente.
                                    Tener consideración que por este hecho no tendremos compasión de banear Guild´s completas. Sin derecho a reclamos ni apelaciones.
                                    * No se permitirá el uso de ningún personaje en modo AFK para custodiar las rutas de tardeó ni teleport.
                                    De ser sorprendido recibirá un Baneo de 24 a 72 Horas de las (CUENTAS + IP).
                                    El Espionaje de los Mercantes, Mercas o Trader (es decir Utilizar un Personaje en modo trace detrás de una mercancía o seguirla a distancia sin jop será sancionado).
                                    Dicha sanción variara de acuerdo a la reincidencia de la persona en este hecho.
                                    1ra Vez Baneo de 24 a 72 Horas de las (Cuentas + IP)
                                    2do Vez Baneo de 7 a 14 días de las (cuentas + IP)
                                    3ra Vez Baneo de forma permanente y sin derecho de reclamos de TODAS LAS CUENTAS ASOCIADAS A LA IP.
                                </p>
                                <h3>
                                    3) ETAPA COMERCIALIZACION
                                </h3>
                                <p>
                                    Se permitirá una libre comercialización de ítems dentro del servidor la cual estaremos muy atentos para evitar todo tipo de robos o scarmer.
                                    Sin embargo, para conservar un mejor y mas seguro medio de transferencia habilitaremos un grupo de middlema’s o mediadores los cuales tendrán la obligación de garantizar que el Exchange o intercambio se realice de la forma más rápida y segura posible.
                                    Método de acción del middlema’s
                                    El intermediario o mediador tendrá contacto directo con las partes interesadas atravez del PartyChat.
                                    * Deberan Ser espesificos al indicar quien vende y su precio al igual que el comprador debera confirmar todos los datos.
                                    * Confirman Metodo de Pago y Datos Personales.
                                    * Entrega de Items. Vendedor-Mediador
                                    * Solicitud de Orden de Pago al Mediador (Comisión equivalente al 10% del precio de venta del o los Items Pagados solo en Silk).
                                    * Solicitud de Orden de Pago al Vendedor (El comprador debera entregar ScreenShot tanto al vendedor como al mediador detallando fecha, hora, monto y codigo de seguridad).
                                    * Una vez confirmados que todos los datos son correctos se procedera a la entrega de los items al comprador y se disolvera el Party.
                                </p>
                                <p>
                                    1) Deberan Ser espesificos al indicar quien vende y su precio al igual que el comprador debera confirmar todos los datos.
                                </p>
                                <p>
                                    2) Confirman Metodo de Pago y Datos Personales.
                                </p>
                                <p>
                                    3) Entrega de Items. Vendedor-Mediador
                                </p>
                                <p>
                                    4) Solicitud de Orden de Pago al Mediador (Comisión equivalente al 10% del precio de venta del o los Items Pagados solo en Silk).
                                </p>
                                <p>
                                    5) Solicitud de Orden de Pago al Vendedor (El comprador debera entregar ScreenShot tanto al vendedor como al mediador detallando fecha, hora, monto y codigo de seguridad).
                                </p>
                                <p>
                                    6) Una vez confirmados que todos los datos son correctos se procedera a la entrega de los items al comprador y se disolvera el Party.
                                </p>
                                <h3>
                                    4) ETAPA DE EVENTOS
                                </h3>
                                <h4>
                                    1. EVENTOS DE CAPTURE THE FLAG:
                                </h4>
                                <p>
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones.
                                    No se permitirá el uso de BOT (activados) ni el registro de más de 1 personaje por IP
                                    No se permitirá el modo AFK en ninguno de los eventos.
                                    Se prohíbe la distinción de miembros de 1 misma GUILD. (AMBOS EQUIPOS DEBERAN PELEAR ENTRE SI) de ser sorprendidos evitando la confrontación será descalificados ambos jugadores y recibirán un baneo de 4 a 8 horas a criterio del GM.
                                </p>
                                <h4>
                                    2. EVENTO BATTLE ARENA:
                                </h4>
                                <p>
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones.
                                    No se permitirá el uso de BOT ni el registro de más de 1 personaje por IP
                                    Se prohíbe la distinción de miembros de 1 misma GUILD. (AMBOS EQUIPOS DEBERAN PELEAR ENTRE SI) de ser sorprendidos evitando la confrontación será descalificados ambos jugadores y recibirán un baneo de 4 a 8 horas a criterio del GM.
                                </p>
                                <h4>
                                    3. EVENTOS DE ROC / MEDUSA / HAOERIS / SETH
                                </h4>
                                <p>
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase. Por ejemplo: DANCING, TAMOUR, WARRIOR BUFFS, CLERIK BUFFS.
                                    Las entradas a los Portales estarán limitadas a 1 personaje por IP.
                                    Sin Embargo el uso de todos los buff estan permitidos siempre para players activos.
                                </p>
                                <h4>
                                    4. FORTRESS WAR
                                </h4>
                                <p>
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase. Por ejemplo: DANCING, TAMOUR, WARRIOR BUFFS, CLERIK BUFFS.
                                    Las entradas a los Gate estarán limitadas a 1 personaje por IP.
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones.
                                    SANCIONES.
                                </p>
                                <p>
                                    1- BANEO de 24 a 72 Horas de la IP.
                                </p>
                                <p>
                                    2- BANEO indefinido de todas las cuentas asociadas a la IP.
                                </p>
                            </Typography>
                        </CardContent>
                </Card>
            </Box>

        </Fragment>

    );
}
