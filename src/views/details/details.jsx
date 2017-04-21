import Layout from 'components/layout/layout';

const Details = (props) => {
  return (
    <Layout>
      Details page, {props.params.id}
    </Layout>
  );
};

export default Details;