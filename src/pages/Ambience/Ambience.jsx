import React from 'react';
import { Divider, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import houseCard from "../../assets/ambience.jpg";

function Ambience() {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: theme.spacing(10),
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));
    const ImgContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));
    const Divider = styled(Box)(({ theme }) => ({
        width: '13%',
        height: '15px',
        backgroundColor: '#000339',
        [theme.breakpoints.down('md')]: {
            marginLeft: "auto",
            marginRight: 'auto',
        },
    }));
    const TextFlexBox = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(7),
        display:'flex',
        justifyContent:"space-between",
        padding: theme.spacing(0,5,0,5),
        [theme.breakpoints.down('sm')]: {
           flexDirection:'column',
           gap: theme.spacing(5),
        },
    }));
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize:'64px',
        Color: '#000',
        fontWeight:'700',
        [theme.breakpoints.down('md')]: {
           fontSize:'32px'
        },
    }));
    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize:'18px',
        Color: '#7B8087',
        fontWeight:'500',
        [theme.breakpoints.down('md')]: {
           fontSize:'14px'
        },
    }));
    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <CustomBox>
                    <ImgContainer>
                        <img src={houseCard} alt='house' style={{ maxWidth: '100%' }} />
                    </ImgContainer>
                    <Box>
                        <Divider />
                        <Typography
                            sx={{
                                fontSize: "35px",
                                color: '#000339',
                                fontWeight: '700',
                                my: 3,
                            }}
                        >
                            you've found ambience you love
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                color: '#5A6473',
                                lineHeight: '27px'
                            }}
                        >
                            Discover the epitome of culinary exellance at savoria, where every visit is an enhanting rendzvous with art of dining.
                        </Typography>
                    </Box>

                </CustomBox>

                <TextFlexBox>
                    <Box 
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'column',
                    }}
                    >
                    <LargeText>250+</LargeText>
                    <SmallText>Dishes</SmallText>
                   </Box>
                   <Box 
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'column',
                    }}
                    >
                    <LargeText>350+</LargeText>
                    <SmallText>Trusted Clients</SmallText>
                   </Box>
                   <Box 
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'column',
                    }}
                    >
                    <LargeText>350+</LargeText>
                    <SmallText>Delivery per day</SmallText>
                   </Box>

                </TextFlexBox>
            </Container>
        </Box>
    )
}

export default Ambience