import { connect } from 'react-refetch';
import Catalog from '../components/Catalog';

export const refetchMapper = props => ({
  kapp: `${bundle.apiLocation()}/kapps/${bundle.kappSlug()}?include=forms`
});

export default connect(refetchMapper)(Catalog);