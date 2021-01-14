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

const getMotherTonguesData = (db, language) => {
  return formatDetailOf(db, language, field.MOTHER_TONGUE);
};

const getAgeGroupsData = (db, language) => {
  return formatDetailOf(db, language, field.AGE_GROUP);
};

const sentencesCount = (db, userId, userName, language) => {
  return db(table.SENTENCES)
    .count('*')
    .where({userId, userName, language})
    .whereNot(field.FILE_NAME, null)
    .then((row) => Promise.resolve(row));
};

const getCountOfTotalSpeakerAndRecordedAudio = (db, language) => {
  const subQuery = db
    .count('*')
    .column({index: 1})
    .from(table.SENTENCES)
    .whereNot(field.FILE_NAME, null)
    .where(field.LANGUAGE, language);

  const allRecord = db(table.SENTENCES)
    .distinct(field.USER_ID, field.USER_NAME)
    .from(table.SENTENCES)
    .whereNot(field.FILE_NAME, null)
    .where(field.LANGUAGE, language)
    .as('allRecord');

  return db.count('*').column({index: 0}).from(allRecord).unionAll(subQuery);
};

module.exports = {
  getGenderData,
  getMotherTonguesData,
  getAgeGroupsData,
  sentencesCount,
  getCountOfTotalSpeakerAndRecordedAudio,
};
