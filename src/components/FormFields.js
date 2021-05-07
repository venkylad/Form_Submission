import { Form } from "react-bootstrap";
import { timeZones } from "./timezones";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";

const FormFields = ({ keys }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [details, setDetails] = useState(null);

  console.log(keys);

  const onSubmit = (data, e) => {
    const formData = {
      ...data,
      captcha: true,
      username: data.username.toLowerCase(),
      timezone: "America/New_York",
    };

    console.log("formData", formData);
    setDetails(formData);
    axios
      .post(
        `http://134.209.148.76:2000/api/v3/sign-up/${
          keys === "first" ? "fan" : "talent"
        }`,
        formData
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert(
            ` ${
              keys === "first" ? "Fan" : "Talent"
            } signup has succesfully completed for Fancovo.`
          );
          e.target.reset();
        } else if (res.status === 400) {
          alert("some error occured");
        }
      })
      .catch((err) => {
        console.log(err, err.message);
        alert("Looks like user already exists");
        e.target.reset();
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            {...register("first_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            placeholder="first name"
            className="input_box bg-dark text-white"
          />

          <Form.Text>
            {errors?.first_name?.type === "maxLength" &&
              "First name cannot exceed 20 characters"}
            {errors?.first_name?.type === "required" &&
              "This field is required"}
            {errors?.first_name?.type === "pattern" &&
              "Alphabetical characters only"}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            placeholder="last name"
            className="input_box bg-dark text-white"
          />
          <Form.Text>
            {errors?.last_name?.type === "required" && "This field is required"}
            {errors?.last_name?.type === "pattern" &&
              "Alphabetical characters only"}
            {errors?.last_name?.type === "maxLength" &&
              "First name cannot exceed 20 characters"}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>user Name</Form.Label>
          <Form.Control
            {...register("username", {
              required: true,
              maxLength: 15,
            })}
            type="text"
            placeholder="username"
            className="input_box bg-dark text-white"
          />
          <Form.Text>
            {errors?.password?.type === "maxLength" &&
              "Password cannot exceed 15 characters"}
            {errors?.username?.type === "required" && "This field is required "}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            })}
            type="email"
            placeholder="email address"
            className="input_box bg-dark text-white"
          />
          <Form.Text>
            {errors?.email?.type === "pattern" && "Enter E-mail only "}
            {errors?.email?.type === "required" && "This field is required "}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Time Zone</Form.Label>
          <Form.Control
            as="select"
            className="input_box bg-dark text-white"
            {...register("timezone")}
          >
            {timeZones.map((time, idx) => (
              <option key={idx} value={time}>
                {time}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: true,
              maxLength: 25,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[!@#$]).{8,15}$/g,
            })}
            type="password"
            placeholder="password"
            className="input_box bg-dark text-white"
          />
          <Form.Text>
            {errors?.password?.type === "maxLength" &&
              "Password cannot exceed 25 characters"}
            {errors?.password?.type === "pattern" &&
              "Need letters, digits & special characters"}
            {errors?.password?.type === "required" && "This field is required "}
          </Form.Text>
        </Form.Group>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Form.Check
            type="checkbox"
            disabled
            checked={true}
            label="I agree the terms and conditions"
            className="my-1"
          />
          <button
            className="my-1 submit_btn"
            type="submit"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          <p className="my-1">
            Already have an account ?{" "}
            <span style={{ color: "#10ff8d" }}> Log in </span>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default FormFields;
