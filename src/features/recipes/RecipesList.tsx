import React, {useEffect} from "react";
import useRecipes from "../../hooks/useRecipes";
import {IRecipe} from "./types/Recipes";
import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import styled from 'styled-components';
import CardPicture from "./components/CardPicture";


const CardTitle = styled(Typography)`
  &&& {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const StyledCardContent = styled(CardContent)`
  &&& {
    padding: 2rem 1rem;
  }
`
const StyledBackground = styled.div`
  &&& {
    background-color: #eee;
    padding: 1rem;
  }
`

const RecipesList = () => {
    const {list, getList} = useRecipes();
    useEffect(() => {
        getList();
    }, []); // eslint-disable-line

    return (
        <StyledBackground>
            <Container>
                <Grid container spacing={2}>
                    {list?.length && list.map((item: IRecipe, index: number) => {
                        return (
                            <Grid item md={4} xs={12} key={index}>
                                <Card>
                                    <CardActionArea>
                                        <CardPicture imageList={item.imageList}/>
                                        <StyledCardContent>
                                            <CardTitle variant="body2" color="textSecondary">
                                                {item.title}
                                            </CardTitle>
                                        </StyledCardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </Container>
        </StyledBackground>
    )
}

export default React.memo(RecipesList);
