import classes from "./Mains.module.css";

export function Mains() {
  const ITEMS = [
    {
      href: "https://nextjs.org/learn-pages-router/basics/create-nextjs-app",
      title: "Item 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus repellat porro necessitatibus exercitationem fugit ab placeat. Nam itaque nulla quae, numquam facere odit corrupti dicta,aut reprehenderit, omnis ut.",
    },
    {
      href: "https://nextjs.org/learn-pages-router/basics/",
      title: "Item 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus repellat porro necessitatibus exercitationem fugit ab placeat. Nam itaque nulla quae, numquam facere odit corrupti dicta,aut reprehenderit, omnis ut.",
    },
    {
      href: "https://nextjs.org/learn-pages-router/",
      title: "Item 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus repellat porro necessitatibus exercitationem fugit ab placeat. Nam itaque nulla quae, numquam facere odit corrupti dicta,aut reprehenderit, omnis ut.",
    },
    {
      href: "https://nextjs.org/",
      title: "Item 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus repellat porro necessitatibus exercitationem fugit ab placeat. Nam itaque nulla quae, numquam facere odit corrupti dicta,aut reprehenderit, omnis ut.",
    },
  ];

  return (
    <>
      <div className={classes.grid}>
        {ITEMS.map((item) => {
          return (
            <a key={item.title} href={item.href} className={classes.grid_item}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
