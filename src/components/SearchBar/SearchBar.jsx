import { Formik, Field, Form } from "formik";

const SearchBar = ({ onSetSearchQuery }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        onSetSearchQuery(values.query);
      }}
    >
      <Form>
        <Field placeholder='Search images' type='text' name='query' />
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
