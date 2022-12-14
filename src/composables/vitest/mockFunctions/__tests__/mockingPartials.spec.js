import defaultExport, {bar, foo} from '../foo-bar-baz';

vi.mock('../foo-bar-baz', async () => {
  //const originalModule = jest.requireActual('../foo-bar-baz');
  const originalModule = vi.importActual('../foo-bar-baz');

  //Mock the default export and named export 'foo'
  
  return {
    __esModule: true,
    //... originalModule,
    ... await originalModule,
    default: vi.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {

  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
