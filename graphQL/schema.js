const Title = require("../models/Title");
const User = require("../models/User");
const Team = require("../models/Team");
const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLDate
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    consented: { type: GraphQLBoolean },
    dateHired: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateLastUpdated: { type: GraphQLString },
    isSuperUser: { type: GraphQLBoolean },
    skills: { type: GraphQLString },
    bio: { type: GraphQLString },
    title: {
      type: TitleType,
      resolve(parent, args) {
        return Title.findById(parent.title);
      }
    },
    team: {
      type: TeamType,
      resolve(parent, args) {
        return Team.findById(parent.team)
      }
    },
  })
});

const TitleType = new GraphQLObjectType({
  name: "Title",
  fields: () => ({
    _id: { type: GraphQLID },
    jobTitle: { type: GraphQLString },
    jobDescription: { type: GraphQLString },
  })
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    _id: { type: GraphQLID },
    teamName: { type: GraphQLString },
    teamDescription: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findOne(args.id);
      }
    },
    team: {
      type: TeamType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Team.findOne(args.id);
      }
    },
    title: {
      type: TitleType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Title.findOne(args.id);
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTeam: {
      type: TeamType,
      args: {
        teamName: { type: GraphQLString },
        teamDescription: { type: GraphQLString }
      },
      resolve(parent, args) {
        let team = new Team({
          teamName: args.teamName,
          teamDescription: args.teamDescription
        });
        team.save();
        return team;
      }
    },
    addTitle: {
      type: TitleType,
      args: {
        jobTitle: { type: GraphQLString },
        jobDescription: { type: GraphQLString }
      },
      resolve(parent, args) {
        let title = new Title({
          jobTitle: args.jobTitle,
          jobDescription: args.jobDescription
        });
        title.save();
        return title;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
