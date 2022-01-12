const products = [
    {
      name: "FIXAČNÍ LANKO 0,8 MM (SILON)",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      sku:900343,
      price: 3.89,
      countInStock: 15,
    },
    {
      name: "FIXAČNÍ KOLÍK 2,6 MM UNIVERSAL",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      sku:900340,
      price: 3.87,
      countInStock: 10,
    },
    {
      name: "ÁSKA VYTAHOVACÍ UNIVERSAL 5 X 0,14 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      sku:900360,
      price: 14.86,
      countInStock: 10,
    },
    {
      name: "DRŽÁK ŘETÍZKU",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      sku:900339,
      price: 9.39,
      countInStock: 5,
    },
    {
      name: "FIXAČNÍ KOLÍK 3,2 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      sku:900341,
      price: 	3.98,
      countInStock: 0,
    },
    {
      name: "SPOJKA ŘETÍZKU KLASICKÁ",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      sku:900363,
      price: 	4.65,
      countInStock: 4,
    },
    {
      name: "OVLÁDACÍ ŘETÍZEK 3,2 MM UNIVERSAL",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      sku:900357,
      price: 9.54,
      countInStock: 4,
    },
    {
      name: "RAMÍNKO STANDARD 127 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900314,
      price: 	5.50,
      countInStock: 10,
    },
    {
      name: "KRYTKA ISOLINE PRAVÁ",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900354,
      price: 12.23,
      countInStock: 10,
    },
    {
      name: "KRYTKA ISOLINE LEVÁ",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900353,
      price: 12.23,
      countInStock: 10,
    },
    {
      name: "ZÁVAŽÍ LÁTKY 127 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900327,
      price: 	11.80,
      countInStock: 10,
    },
    {
      name: "DRŽÁK TEXTILNÍ PÁSKY V DOLNÍM PROFILU",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900338,
      price: 8.26,
      countInStock: 10,
    },
    {
      name: "BOČNÍ KRYT DOLNÍHO PROFILU UNIVERSAL",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900330,
      price: 	6.26,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŘETÍZKU KLEC",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900364,
      price: 4.96,
      countInStock: 10,
    },
    {
      name: "PRŮCHODKA FIXACE V HORNÍM PROFILU",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900361,
      price: 	2.63,
      countInStock: 10,
    },
    {
      name: "ŘETÍZEK SPODNÍ SPOJOVACÍ 127 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900318,
      price: 	10.00,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŘETÍZKU",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900321,
      price: 4.88,
      countInStock: 10,
    },
    {
      name: "ŽEBŘÍČEK, NOSIČ LAMEL UNIVERSAL",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900367,
      price: 11.36,
      countInStock: 10,
    },
    {
      name: "DRŽÁK PŘEVODOVKY ISOLINE PRAVÁ",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900426,
      price: 18.48,
      countInStock: 10,
    },
    {
      name: "DRŽÁK PŘEVODOVKY ISOLINE LEVÝ",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900428,
      price: 18.48,
      countInStock: 10,
    },
    {
      name: "RAMÍNKO STANDARD 89 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900313,
      price: 5.00,
      countInStock: 10,
    },
    {
      name: "OZUBENÉ KOLEČKO PŘEVODOVKY ISOLINE",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900359,
      price: 	11.68,
      countInStock: 10,
    },
    {
      name: "ZÁVAŽÍ LÁTKY 89 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900326,
      price: 10.00,
      countInStock: 10,
    },
    {
      name: "SPOJKA ŽEBŘÍČKU",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900365,
      price: 	5.85,
      countInStock: 10,
    },
    {
      name: "DISTANČNÍ PODLOŽKA ISOLINE",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900331,
      price: 8.47,
      countInStock: 10,
    },
    {
      name: "PROVÁZEK OVLÁDACÍ BÍLÝ",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900301,
      price: 9.68,
      countInStock: 10,
    },
    {
      name: "KLEC ŘETÍZKU ISOLINE",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900352,
      price: 10.68,
      countInStock: 10,
    },
    {
      name: "ŘETÍZEK SPODNÍ SPOJOVACÍ 89 MM",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900317,
      price: 	9.68,
      countInStock: 10,
    },
    {
      name: "JBLFLIP4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:1005,
      price: 14,
      countInStock: 10,
    },
    {
      name: "FIXAČNÍ KROUŽEK POHYBU TŘÍBOKÉHO DRÁTU",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      sku:900342,
      price: 4.84,
      countInStock: 10,
    },
    
  ];
  
  module.exports = products;