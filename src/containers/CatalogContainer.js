import { connect } from 'react-refetch';
import { Catalog } from '../components/Catalog';

export const refetchMapper = () => ({
  kapp: `${window.bundle.apiLocation()}/kapps/${window.bundle.kappSlug()}?include=forms`,
});

export const CatalogContainer = connect(refetchMapper)(Catalog);
