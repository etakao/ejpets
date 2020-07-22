import React from 'react';
import { Page,  Body, BodyIn, BoxTitle, Title, BoxText, BoxImage, Image, BoxInfo, Text } from "./styles/sobreNos";
import logopng from '../../assets/SobreNos/logo4.png';

export default function SobreNos(){
    return(
        <Page id="sobrenos">
            <Body>
                <BodyIn>
                    <BoxImage>
                        <Image src = {logopng}/>
                    </BoxImage>
                    <BoxText>
                        <BoxTitle>
                            <Title>Sobre Nós</Title>
                        </BoxTitle>
                        <BoxInfo>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex id nulla sollicitudin ultrices. Nam mollis sed tellus id pellentesque. Nulla sed tincidunt augue. Donec eget magna vitae nibh pretium laoreet. Vestibulum vitae elit quis sapien lacinia mollis vel sit amet diam. Donec facilisis ante ipsum, quis consequat purus tempor vitae. Nunc vel dui nec mauris suscipit hendrerit. Praesent bibendum sagittis auctor. Donec et lacus eget urna pretium venenatis eget vitae mauris. Suspendisse sed tortor sit amet sem sollicitudin convallis vel quis ex. Proin sodales libero nec aliquam tristique. Pellentesque tincidunt turpis non orci tempor, vitae sodales risus volutpat. Curabitur eu nulla feugiat, fringilla neque aliquet, vulputate tellus. In sodales faucibus ligula, vel dapibus nulla. Nam vitae tincidunt mauris, et efficitur est.

Pellentesque efficitur sodales orci et rhoncus. Duis finibus, enim vel consectetur viverra, lectus massa varius elit, ac sodales nibh erat eu ex. Proin scelerisque sodales dolor, vitae suscipit dui molestie et. In quis lacus sit amet metus porta aliquam eget eu justo. Morbi dictum arcu sit amet quam interdum mollis. Donec vel lacus non felis volutpat fermentum. Suspendisse vehicula nulla eget leo suscipit, a vulputate ipsum ullamcorper</Text>
                        </BoxInfo>
                    </BoxText>
                </BodyIn>
            </Body>
        </Page>
    );
}