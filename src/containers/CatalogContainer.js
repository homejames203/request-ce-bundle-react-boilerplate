import { connect } from 'react-refetch';
import { bundle } from '../lib/kinetic-core';
import { Catalog } from '../components/Catalog';

export const refetchMapper = () => ({
  kapp: `${bundle.apiLocation()}/kapps/${bundle.kappSlug()}?include=forms`,
});

export const CatalogContainer = connect(refetchMapper)(Catalog);
