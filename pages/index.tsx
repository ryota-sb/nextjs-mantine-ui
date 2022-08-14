import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState<"blue" | "orange">("blue");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    if (label === "blue") {
      setLabel("orange");
    } else {
      setLabel("blue");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mantine Hooks!!</h1>
      <TextInput
        style={{ margin: "1rem" }}
        value={value}
        onChange={onChangeValue}
      />
      <Button color={label} onClick={() => toggle()}>
        {label}
      </Button>
    </main>
  );
};

export default Home;
