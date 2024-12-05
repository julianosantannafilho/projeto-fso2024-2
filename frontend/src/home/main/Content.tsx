import { useStoreBomba } from "@/hooks/store";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 10,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const Content = ({ categoria, query }) => {
	const [data, setData] = useState([]);
	const userId = useStoreBomba((state) => state.id);

	useEffect(() => {
		getData();
	}, []);
	console.log(userId);
	async function getData() {
		// FAZER GET ALL POR CATEGORIA
		await axios
			.get(`http://localhost:8080/produto/${categoria}/getAll`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			});
	}

	return (
		<Box>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={false}
				showDots={true}
				infinite={true}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				{data
					? data.map((e, i) => {
							console.log("asdasdasdasd: ", e);
							return (
								<Box key={i}>
									<Card key={e.id}>
										<CardContent>
											<Typography
												gutterBottom
												sx={{ color: "text.secondary", fontSize: 14 }}>
												{e.nome}
											</Typography>
											<img
												src={e.imagem}
												alt={e.name}
												width={100}
												height={100}
											/>
											<Typography variant="body2">{e.descricao}</Typography>
											<Typography variant="body2">R${e.valor},99</Typography>
										</CardContent>
										<CardActions>
											<Button onClick={() => query(e)} size="small">
												Comprar
											</Button>
										</CardActions>
									</Card>
								</Box>
							);
					  })
					: null}
			</Carousel>
		</Box>
	);
};

export default Content;
