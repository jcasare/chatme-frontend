// import React from 'react';
// import {Formik} from 'formik';
// import * as yup from 'yup';
// import {StyleSheet, Text, View} from 'react-native';
// import {TextInput} from 'react-native-paper';
// const Form = ({fields, onSubmit}) => {
//   const initValues: any = {};
//   const validationSchema: any = {};
//   fields.forEach(field => {
//     initValues[field.name] = field.initialValue || '';
//     validationSchema[field.name] = field.validation || yup.string();
//   });
//   return (
//     <Formik
//       initialValues={initValues}
//       validationSchema={yup.object().shape(validationSchema)}
//       onSubmit={onSubmit}>
//       {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//         <>
//           {fields.map((field, index) => (
//             <View key={index} style={styles.containerField}>
//               <Text>{field.label}</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder={field.placeholder}
//                 onChange={handleChange(field.name)}
//                 onBlur={handleBlur(field.name)}
//                 value={values[field.name]}
//                 secureTextEntry={field.secureTextEntry || false}
//               />
//               {errors[field.name] && (
//                 <Text style={styles.error}>{errors[field.name]}</Text>
//               )}
//             </View>
//           ))}
//           <Button onPress={handleSubmit} title="Submit" />
//         </>
//       )}
//     </Formik>
//   );
// };
// const styles = StyleSheet.create({
//   input: {},
//   error: {
//     color: 'red',
//   },
//   containerField: {
//     marginBottom: 80,
//   },
// });
// export default Form;
