const table = {SENTENCES: 'sentences'};
const field = {
  LANGUAGE: 'language',
  FILE_NAME: 'fileName',
  USER_NAME: 'userName',
  USER_ID: 'userId',
  MOTHER_TONGUE: 'motherTongue',
  GENDER: 'gender',
  AGE_GROUP: 'ageGroup',
  SENTENCE_ID: 'sentenceId',
  SENTENCE: 'sentence',
};

const getDetailOf = (db, language, column) => {
  return db(table.SENTENCES)
    .whereNot(field.FILE_NAME, null)
    .andWhere(field.LANGUAGE, language)
    .groupBy(column, field.USER_ID, field.USER_NAME)
    .select(field.USER_ID, field.USER_NAME, column)
    .as('data');
};

const formatDetailOf = (db = knex, language, column) => {
  return db
    .select(column)
    .from(getDetailOf(db, language, column))
    .count('*')
    .groupBy(column)
    .then((row) => Promise.resolve(row));
};

const getGenderData = (db, language) => {
  return formatDetailOf(db, language, field.GENDER);
};

module.exports = {
  getGenderData,
};
