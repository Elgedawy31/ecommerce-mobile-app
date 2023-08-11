import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
import * as Yup from "yup";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

const Register = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string().min(8).required("Password Is Required"),
    email: Yup.string().email().required("Email Is Required"),
    username: Yup.string().required("Username Is Required"),
    location: Yup.string().required("Location Is Required"),
  });

  const HandleAlert = (title, message) => {
    return Alert.alert(title, message, [
      {
        text: "ok",
      },
    ]);
  };

  const handleSuccess = () => {
    return Alert.alert("Done", ` Register Successfully`, [
      {
        text: "To Home ",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };
  const handleRegister = async (values) => {
    setLoader(true);

    try {
      const response = await axios.post(
        "https://ecommerce-ytsn.onrender.com/auth/register",
        values
      );

      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      HandleAlert(" Falied To Register , Try Again ", "Unknown Error ");
    }

    setLoader(false)
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
      </TouchableOpacity>
      <Image source={require("../assets/images/bk.png")} style={styles.image} />

      <Text style={styles.text}>Unlimited Luxiorous Furniture</Text>
      <Formik
        initialValues={{ email: "", password: "", username: "", location: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>userName</Text>
              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={24}
                  color={COLORS.primary}
                />
                <TextInput
                  placeholder="Username"
                  style={{ marginHorizontal: 10, width: "100%" }}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
              </View>
              {touched.username && errors.username && (
                <Text style={{ fontWeight: "300", color: "red" }}>
                  {errors.username}
                </Text>
              )}
              <Text style={styles.label}>Location</Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <TextInput
                  placeholder="Location"
                  style={{ marginHorizontal: 10, width: "100%" }}
                  onChangeText={handleChange("location")}
                  onBlur={handleBlur("location")}
                  value={values.location}
                />
              </View>
              {touched.location && errors.location && (
                <Text style={{ fontWeight: "300", color: "red" }}>
                  {errors.location}
                </Text>
              )}
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <TextInput
                  placeholder="Enter Email"
                  style={{ marginHorizontal: 10, width: "100%" }}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={{ fontWeight: "300", color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <TextInput
                  secureTextEntry={!showPass}
                  placeholder="Enter password"
                  style={{ marginHorizontal: 10, flex: 1 }}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <MaterialCommunityIcons
                    name={showPass ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={{ fontWeight: "300", color: "red" }}>
                  {errors.password}
                </Text>
              )}
            </View>

            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: isValid ? COLORS.primary : COLORS.gray,
                padding: 10,
                borderRadius: 10,
              }}
              onPress={
                isValid
                  ? handleSubmit
                  : () =>
                      HandleAlert(
                        "Invalid Form",
                        "Please Provide All Require Form"
                      )
              }
            >
              {loader ? (
                <ActivityIndicator />
              ) : (
                <Text style={{ textAlign: "center", color: COLORS.lightWhite }}>
                  S I G N U P
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: 5 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.gray,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 20,
  },

  image: {
    height: SIZES.height / 2.4,
    resizeMode: "contain",
    width: SIZES.width - 10,
    marginBottom: SIZES.xxLarge,
  },
  text: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
  },
  wrapper: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginVertical: 10,
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  inputWrapper: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 55,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
