import { connect } from 'react-refetch';
import Catalog from '../components/Catalog';

export const refetchMapper = props => ({
  kapp: bundle.apiLocation() + '/kapps/catalog?include=forms'
});

export default connect(refetchMapper)(Catalog);