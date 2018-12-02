import { EditArticleModule } from './edit-article.module';

describe('EditArticleModule', () => {
  let editArticleModule: EditArticleModule;

  beforeEach(() => {
    editArticleModule = new EditArticleModule();
  });

  it('should create an instance', () => {
    expect(editArticleModule).toBeTruthy();
  });
});
